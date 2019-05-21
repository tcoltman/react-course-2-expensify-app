//Expenses Reducer
const expensesReducerDefaultState = [];
export default  (state = expensesReducerDefaultState,action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
        return [  //use state.concat() and return that, this returns a new array, cant use push. Remember you cant change the state
            ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
        return state.filter(({id})=> id !== action.expense.id )
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if (expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                return expense;
            }
        });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
        return state;
    }
};

