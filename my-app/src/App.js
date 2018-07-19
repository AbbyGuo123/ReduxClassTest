// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.inputText = React.createRef();

//   }
//   multiply=()=>{
//     const onxcrement = this.props.onxcrement;
//     const a = this.inputText.current.value;
//     onxcrement(a);
//   }

  
//   render() {
//     const { state, onIncrement, onDecrement ,onxcrement} = this.props;
//     return (
//       <div className="App">
//         <p>
//           Clicked: {state} times
//         {' '}
//           <button onClick={onIncrement}>
//             +
//           </button>
//           <button onClick={onDecrement}>
//             -
//           </button>
//           <input type="text" defaultValue={0} ref={this.inputText}/>
//           <button onClick={this.multiply}>
//             *
//           </button>
//         </p >
//       </div>
//     );
//   }
// }

// export default App;