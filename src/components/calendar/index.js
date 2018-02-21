import React from 'react';
import './style.css';
import Week from './week'
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        const today = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        this.state = {
            dayList: ['Sun', 'Mon', 'Tue',
                'Wed', 'Thu', 'Fri', 'Sat'],
            startDay: 'Sun',
            monthList: ['Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today, month, year
        }
        this.renderWeekHead = this.renderWeekHead.bind(this);
        this.renderWeeks = this.renderWeeks.bind(this);
        this.getDaysInMonth = this.getDaysInMonth.bind(this);
    }
    getDaysInMonth() {
        const { month, year } = this.state;
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }


    render() {
        console.log(this.getDaysInMonth(this.state.month, this.state.year))
        return (<div className='cal'>
            <table>
                <tbody>
                    {this.renderWeekHead()}
                    {this.renderWeeks()}
                </tbody>
            </table>

        </div>);
    }
    renderWeekHead() {
        return <tr>{this.state.dayList.map((day) => <th key={day}>{day}</th>)}</tr>;
    }
    renderWeeks() {
        const { month, year } = this.state;
        var date = new Date(year, month, 1);
        var days = [];
        var rows = [];
        var week = [];
        while (date.getMonth() === month) {
            var curr = new Date(date);
            days.push(curr);
            week = this.pushDay(curr, week)
            if (week.length === 7) {
                rows.push(<Week days={week}/>);
                week = [];
            }
            date.setDate(date.getDate() + 1);
        }
        return rows;

    }

    pushDay(day, week) {
        week = week || [];
        week[day.getDay()] = day;
        return week;
    }
    pushEmpty(){
        
    }
}
export default Calendar;