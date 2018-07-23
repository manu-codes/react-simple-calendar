import React from 'react';
import './style.css';


class AutoCompleter extends React.Component {
    length = 0
    temporaryData = null
    constructor(props) {
        super(props);
        this.dropClick = this.dropClick.bind(this);
        this.itemRender = this.itemRender.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.state = {
            show: false,
            text: '',
            selectedIndex: -1
        }
    }
    onKeyUp(keyEvent) {
        console.log(keyEvent.target.value);
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
        this.setState({ text: this.props.labelDisplay(item) })
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
                        (evt) => this.setState({
                            text: evt.target.value,
                            selectedIndex: 1
                        })
                    }
                    className="auto-sel-cont" />
                {this.renderItems(this.props, this.state)}
            </div>
        )
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
        if (this.length < 4) {
            const flag = this.props.shouldItemRender(item, this.state.text);
            let sel = '';
            if (flag) {
                this.length++;
                if (this.length === this.state.selectedIndex) {
                    sel = 'sel-item';
                    this.temporaryData = i;
                }
            }
            return flag ?
                <div key={this.props.keyGen(item)}
                    className={sel}>
                    {this.props.labelDisplay(item)}
                </div>
                : null;
        } else {
            return null;
        }
    }
    dropClick() {
        this.setState({ show: !this.state.show }, () => console.log(this.state));
    }
}
export default AutoCompleter;