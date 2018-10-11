import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const products = [<li>{BUTCHER_PRODUCTS[0]}</li>, <li>BUTCHER_PRODUCTS[1]</li>, etc...]

// Define these exported classes
export class OlderCoaster extends Component {

  // this function should return the JSX we want the DOM to render
  render() {
    return (
      <p>
        {this.props.passengerText}
      </p>
      <li>
        {this.props.passengerNames}
      </li>
    )
  }

}

export class InFrontOfYou extends Component {
  render() {
    return (
      <p>
        {this.props.solutionInformation}
      </p>
    )
  }
}

export class ButcherShop extends Component {
  render() {
    return (
      <p>
        {this.props.saleMessage}
      </p>
      <li>
        { products }
      </li>
    )
  }
}


export class App extends Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
