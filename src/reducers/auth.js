export default (state={},action) => {
    switch (action.type){
       case 'LOGIN':
       return {
           uid: action.uid
       } ;
       case 'LOGOUT':
       return {};
       default: 
        return state; //If action not LOGIN or LOGOUT, return state as is (no mods)
    } ; 
}