import React from 'react';
import './style.css';
const MAX_LEN = 4;

class AutoCompleter extends React.Component {
    length = 0
    temporaryData = null
    lastItemRef = null
    scrolledToView = false
    constructor(props) {
        super(props);
        this.itemRender = this.itemRender.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.checkForRenderFunction = this.checkForRenderFunction.bind(this);
        this.textChange = this.textChange.bind(this);
        this.state = {
            show: false,
            text: '',
            searchText: '',
            selectedIndex: -1
        }
    }
    onKeyUp(keyEvent) {

        switch (keyEvent.keyCode) {
            case 38:
                return this.changeIndex(-1);
                break;
            case 40:
                return this.changeIndex(1);
                break;
            case 13:
                return this.setSelectedText();
                break;

        }
        this.setState({ show: keyEvent.target.value && keyEvent.target.value.length > 0 });
    }
    setSelectedText() {

        const item = this.props.data[this.temporaryData];
        const text = this.props.labelDisplay(item);
        this.setState({
            text,
            searchText: this.props.caseSensitive ? text : text.toLowerCase(),
            show:false
        })
    }
    changeIndex(increment) {
        let sel = this.state.selectedIndex + increment;
        sel = sel > this.length ? this.length : sel < 1 ? 1 : sel;
        this.setState({ selectedIndex: sel });
    }
    render() {
        this.length = 0;
        return (
            <div className="auto-sel">
                <input onKeyUp={
                    this.onKeyUp}
                    value={this.state.text}
                    onChange={
                        this.textChange
                    }
                    className="auto-sel-cont" />
                {this.renderItems(this.props, this.state)}
            </div>
        )
    }
    textChange(evt) {
        const text = evt.target.value;
        this.setState({
            text: evt.target.value,
            selectedIndex: 1,
            searchText: this.props.caseSensitive ? text : text.toLowerCase()
        });
    }
    componentDidUpdate() {
        if (!this.scrolledToView && this.state.show) {
            if (this.lastItemRef) {
                this.scrolledToView = true;
                this.lastItemRef.scrollIntoView();
            }
        }
    }

    renderItems(props, state) {
        return state.show ? (
            <div id="auto-sel" className="auto-sel-content">
                {
                    props.data.map(
                        (item, i) => this.itemRender(item, i)
                    )
                }
            </div>
        ) : null;
    }
    itemRender(item, i) {
        if (this.length < MAX_LEN) {
            const txt =  this.state.searchText.replace(/[^\w\s]/gi, '') ;
            const flag = this.props.shouldItemRender(item, txt);
            let sel = 'auto-sel-child ';
            if (flag) {
                this.length++;
                if (this.length === this.state.selectedIndex) {
                    sel += 'sel-item';
                    this.temporaryData = i;
                }
            }
            if (flag) {
                const itemIndex = this.length;
                return (
                    <div key={this.props.keyGen(item)}
                        onClick={
                            () => this.mouseAction(itemIndex, true)
                        }
                        onMouseOver={
                            () => this.mouseAction(itemIndex)
                        }
                        ref={(cont) => this.lastItemRef = itemIndex === MAX_LEN ? cont : null}
                        className={sel}>
                        {this.checkForRenderFunction(item)}
                    </div>
                )
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    mouseAction(selectedIndex, click) {
        this.setState({ selectedIndex }, () => {
            if (click) {
                this.setSelectedText();
            }
        });
    }
    checkForRenderFunction(item) {
        if (this.props.itemRender) {
            return this.props.itemRender(item);
        } else if (this.props.labelDisplay) {
            this.props.labelDisplay(item);
        } else {
            return item;
        }
    }
}
export default AutoCompleter;