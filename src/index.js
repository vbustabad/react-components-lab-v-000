import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const products = [<li>{BUTCHER_PRODUCTS[0]}</li>, <li>{BUTCHER_PRODUCTS[1]}</li>, <li>{BUTCHER_PRODUCTS[2]}</li>, <li>{BUTCHER_PRODUCTS[3]}</li>]

// Define these exported classes
export class OlderCoaster extends Component {

  // this function should return the JSX we want the DOM to render
  render() {
    return (
      <div class="oldercoaster">
        <p>
          {this.props.passengerText}
        </p>
        <ul>
          <li>
            {this.props.passengerNames}
          </li>
        </ul>
      </div>
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
        <OlderCoaster passengerText={"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
