import React from 'react';
import './style.css';
class Week extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        this.props.days.map((day,ind)=>console.log(day,ind));
        return <tr>
            {this.props.days &&
                this.props.days.map(
                    (day) => day ? (<td key={day.getDate()}>{day.getDate()}</td>) : <td>  </td>
                )
            }
        </tr>
    }
   
}
export default Week;