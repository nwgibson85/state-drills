import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion';
// import Tabs from './accordion/Tabs';

const sections = [
  {title: 'Section 1',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',},
  {title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',},
  {title: 'Section 3',
  content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',},
]

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <h1>Accodion</h1>
          <Accordion sec = {sections} />
      </div>
    );
  }
}

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

// class App extends Component {
//   render() {
//     return (
    
//       <div className="App">
//         <h1>Accodion</h1>
//           <Tabs tabs = {tabsProp} />
//       </div>
//     );
//   }
// }

export default App;