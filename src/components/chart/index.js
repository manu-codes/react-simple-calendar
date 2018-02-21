import React from 'react';
import './style.css';


class Chart extends React.Component {
    constructor(props) {
        super(props);
    }
    getPercentages(maxWidth) {

    }
    render() {
        const max = Math.max(...this.props.values);
        return (
            <div className='chart'>
                {this.props.maxLen && this.props.values && this.props.values.map((val) => {
                    let stl = { width: (val * this.props.maxLen / max), height: 30 }
                    return (
                        <div>
                            <div className='chart-elem' key={val} style={stl} title={val}>
                            </div>
                            <div className='chart-txt'>{val}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Chart;