import React from 'react';
import './style.css';


class AutoCompleter extends React.Component {
    length = -1
    constructor(props) {
        super(props);
        this.dropClick = this.dropClick.bind(this);
        this.itemRender = this.itemRender.bind(this);
        this.state = {
            show: false,
            text: ''
        }
    }
    render() {
        this.length = 0;
        return (
            <div className="auto-sel">
                <input onClick={this.dropClick}
                    onChange={
                        (evt) => this.setState({ text: evt.target.value })
                    }
                    className="auto-sel-cont" />
                {this.renderItems(this.props, this.state)}
            </div>
        )
    }

    renderItems(props, state) {
        return state.show ? (
            <div id="myauto-sel" className="auto-sel-content">
                {
                    props.data.map(
                        (item, i) => this.itemRender(item)
                    )
                }
            </div>
        ) : null;
    }
    itemRender(item) {
        if (this.length < 4) {
            const flag = this.props.shouldItemRender(item, this.state.text);
            if (flag) {
                this.length++;
            }
            return flag ?
                <div key={this.props.keyGen(item)}>{this.props.labelDisplay(item)}</div>
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