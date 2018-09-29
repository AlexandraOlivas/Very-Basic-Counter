import React, { Component } from "react";
import NavBar from './components/navbar';
import Counters from "./components/counters";
import "./App.css";

class App extends Component {/* here we have state and our counters.       */
  state = { 
      counters: [
          {id:1, value:0},
          {id:2, value:0},
          {id:3, value:0},
          {id:4, value:0}
      ]
   };

   handleIncrement = counter => {  /* the following methods all modify or mutate the state. <increment, reset, delete */ 
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters [index]= {...counter};
      counters[index].value++;
      this.setState({counters});
  };

   handleReset = () => {/* we are implementing handleReset and setting it to an arrow funtion */
      const counters = this.state.counters.map(c => { 
                  /* use the map method to get each counter and reset with a value of zero then return it */

          c.value = 0;
          return c;
       });
       this.setState({counters});
   };

   handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters}); {/* pass an object to override counters prperty  */}
  };
  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
        <Counters  /* controlled component because it doesnt have any state, it simply receives data and methods to modify data via props*/
        counters = {this.state.counters}
        onReset={this.handleReset} /* onReset, onIncrement, onDelete are the properties of the prop object */
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        /* These are the three events raised by the component and the corresponding handlers.
        We moved the state and methods from the Counters component
        and moved t to the App.js which is the parent. we now have to make reference
        to the state methods here in the attributes*/
         />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
