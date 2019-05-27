import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(()=>({calendarFocused}))

    }
    render(){
        return ( //props has access to filter from mapStateToProps
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">                
                    <input type="text" className="text-input" value={this.props.filters.text}  //set value to state value
                    placeholder="Search expenses"
                    onChange={(e)=>{ //create an onChange prop to write changes back to state with dispatch
                        this.props.dispatch(setTextFilter(e.target.value)) 
                    }} />
                </div>
                <div className="input-group__item">
                    <select className="select" value={this.props.filters.sortBy}
                    onChange={(e)=>{ //create an onChange prop to write changes back to state with dispatch
                        if (e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount())
                        } else if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        } 
                    }} >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
            />
                </div>
            </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);