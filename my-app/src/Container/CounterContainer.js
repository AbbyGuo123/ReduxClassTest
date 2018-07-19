import {connect} from 'react-redux'
import Counter from "../components/Counter";
import {decrement, increment, xcrement} from "../actions";


const mapStateToProps = (state, ownProps) =>{
    console.log(ownProps.index);
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        onxcrement:(multipler,index) => dispatch(xcrement(multipler,index)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)