import * as React from 'react';
import { getWeekDays, getDaysArray, getMonths } from '../utils/date';

export interface State {
    month: number;
    day: number;
    year: number;
}

export interface Props {
    yearsRange: Array<number>;
    minDate: Array<number>;
}

class Calendar extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            month: new Date().getMonth(),
            day: new Date().getDay(),
            year: new Date().getFullYear(),
        };
    }
    setNextMonth(): void {
        this.setMonth(this.state.month + 1);
    }
    setPrevMonth(): void {
        this.setMonth(this.state.month - 1);
    }
    setMonth(month: number): void {
        this.setState({
            month
        });
    }
    setYear(year: number): void {
        this.setState({
            year
        });
    }
    render() {
        return (
            <div className="Calendar" >
                <div className="Calendar--controls">
                    <button
                        className="Calendar--btn-prev"
                        onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => this.setPrevMonth()}
                    >
                        <i className="fa fa-arrow-left" />
                    </button>
                    <select
                        value={String(this.state.month)}
                        onChange={
                            (e: React.SyntheticEvent<HTMLSelectElement>) => this.setMonth(
                                parseInt(e.currentTarget.value, 10)
                            )
                        }
                    >
                        {getMonths().map((m, i) => (
                            <option key={i} value={i}>{m}</option>
                        ))}
                    </select>
                    <select
                        value={String(this.state.year)}
                        onChange={
                            (e: React.SyntheticEvent<HTMLSelectElement>) => this.setYear(
                                parseInt(e.currentTarget.value, 10)
                            )
                        }
                    >
                        {[2016, 2017, 2018, 2019, 2020].map(y => (
                            <option key={y} value={y} >{y}</option>
                        ))}
                    </select>
                    <button
                        className="Calendar--btn-next"
                        onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => this.setNextMonth()}
                    >
                        <i className="fa fa-arrow-right" />
                    </button>
                </div>
                <div className="Calendar--weekdays">
                    {getWeekDays().map(day => <span key={day}>{day}</span>)}
                </div>
                <div className="Calendar--days">
                    {getDaysArray(this.state.month, this.state.year).map(
                        (day, index) => <span key={index} className="Calendar--date">{day}</span>)}
                </div>
            </div>
        );
    }
}

export default Calendar;