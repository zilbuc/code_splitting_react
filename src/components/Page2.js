import React from 'react';
import logo from '../logo.svg';

// class Page1 extends Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return ();
//   }
// }

const Page2 = ( { onRouteChange } ) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <button onClick={() => onRouteChange('page1')}>Page 1</button>
    <button onClick={() => onRouteChange('page3')}>Page 3</button>
  </div>

export default Page2;
