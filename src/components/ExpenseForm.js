import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props){ //move state into constructor to get hold of props here
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
     

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({ description })) //Set the new state
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({ note })) //Set the new state
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //Check valid number with regEpr
            this.setState(()=> ({ amount })) //Set the new state
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt){
        this.setState(() => ({ createdAt }));
        }
      };
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };

      onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount){
            const error = 'Please provide description and amount.' //check first if fields exist populating error state
            this.setState(()=>({error})); 
        } else {
            this.setState(()=>({error:''})); //clear error
            this.props.onSubmit({ //call function passed via props
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100, //change to number(float for decimal), then multiply by 100 to remove decimal to save as string
                createdAt: this.state.createdAt.valueOf(), //createAt is a moment object millisecond timestamp
                note: this.state.note
            })
        }
      }

    render(){
       return (
            <form className="form" onSubmit={this.onSubmit}> {/*call function*/}
            {this.state.error && <p className="form__error">{this.state.error} </p>}
            <input 
                type="text"
                placeholder="Description"
                className="text-input"
                autoFocus
                value={this.state.description}   //get value from state
                onChange={this.onDescriptionChange} //on change called a function
            />
            <input  
                type="text"
                placeholder="Amount"
                className="text-input"
                value={this.state.amount}  //get value from state
                onChange={this.onAmountChange} //on change called a function
            />
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
            <textarea 
                className="textarea "
                placeholder="Add a note for your expense"
                value={this.state.note} //get value from state
                onChange={this.onNoteChange} //on change called a function
            />
            <div>  {/* button in own div to not be affected by above css */}
            <button className="button">Save Expense</button>
            </div>
            </form>
       ) 
    }
}

export default ExpenseForm;