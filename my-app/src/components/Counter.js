import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.inputText = React.createRef();

  }
  multiply=()=>{
    const onxcrement = this.props.onxcrement;
    const a = this.inputText.current.value;
    onxcrement(a,this.props.index);
  }

  timeOutIncrement=()=>{
    const onIncrement=this.props.onIncrement;
    setTimeout(()=>{onIncrement(this.props.index)},1000);
  }

  
  render() {
    const { value, onIncrement, onDecrement ,index} = this.props;
    return (
      <div className="Counter">
        <p>
          Clicked: {value} times
        {' '}
          <button onClick={()=>onIncrement(index)}>
            +
          </button>
          <button onClick={()=>onDecrement(index)}>
            -
          </button>
          <input type="text" defaultValue={0} ref={this.inputText}/>
          <button onClick={this.multiply}>
            *
          </button>
          <button onClick={this.timeOutIncrement}>
          Increment Async
        </button>
        </p >
      </div>
    );
  }
}

export default Counter;