export default (state =[0,0] , action) => {
    console.log(action.index)
    
    switch (action.type){
        case 'INCREMENT':{
            const newState = [...state];
            newState[action.index]++;
            return newState;
        }
        case 'DECREMENT':{
            const newState = [...state];
            newState[action.index]--;
            return newState;
        }
        case 'XCREMENT':{
            const newState = [...state];
            newState[action.index] = newState[action.index]*action.multipler;
            return newState;
        }
        default:
            return state 
    }
    

}