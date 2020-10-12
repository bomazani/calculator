import React, {Component } from 'react';
import './App.css';
import { NumBtn } from './components/NumBtn';
import { OperatorBtn } from './components/OperatorBtn';
import { ClearBtn } from './components/ClearBtn';
import { CalcDisplay } from './components/CalcDisplay';
import { BurgerMenu } from './components/BurgerMenu';
import { EqualBtn } from './components/EqualBtn';

import { evaluate } from 'mathjs';
// import { arraySize } from 'mathjs/es/utils/array';
// import { values } from 'mathjs/es/utils/object';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calcDisplay: "0",
      history: [],
    };
  }

  // If calcDisplay is "0",
  // then the pressed key value should replace "0".
  // otherwise, value should be added to existing calcDisplay content.
  addToCalcDisplay = val => {
    if (this.state.calcDisplay === "0") {
      (this.setState({calcDisplay: val}))
    }else{ 
      this.setState({ calcDisplay: this.state.calcDisplay + val })
    };
  }

  // Evaluate the expression in calcDisplay and store it in the 'history' array.
  handleEqual = () => {
    let tempArray = [];
    this.setState({calcDisplay: this.state.calcDisplay + "=" + evaluate(this.state.calcDisplay) });
    if (this.state.history.length) {
      tempArray = [", " + this.state.calcDisplay + "=" + evaluate(this.state.calcDisplay)];
    } else {
      tempArray = [this.state.calcDisplay + "=" + evaluate(this.state.calcDisplay)];
    };
    this.setState({history: this.state.history.concat(tempArray)});
  }

render() { 
  return (
    <div className="App">
      <div className="calc-wrapper">


        <div className="header">
          {/* <BurgerMenu>Menu</BurgerMenu> */}
          <BurgerMenu>{this.state.history}</BurgerMenu>
        </div>


        <div className="calculator-display">
          <CalcDisplay calcDisplay={this.state.calcDisplay} />
        </div>

        {/* flexbox */}
        {/* <div className="keypad">
          <div className="numberpad">
            <div className="row">
              <ClearBtn handleClear={() => this.setState({calcDisplay: "0"})}>C</ClearBtn>
              <div className="blank">?</div>
              <OperatorBtn handleClick={this.addToCalcDisplay}>/</OperatorBtn>
            </div>
            <div className="row">
              <NumBtn handleClick={this.addToCalcDisplay}>7</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>8</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>9</NumBtn>
            </div>
            <div className="row">
              <NumBtn handleClick={this.addToCalcDisplay}>4</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>5</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>6</NumBtn>
            </div>
            <div className="row">
              <NumBtn handleClick={this.addToCalcDisplay}>1</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>2</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>3</NumBtn>
            </div>
            <div className="row">
              <NumBtn className="zero" handleClick={this.addToCalcDisplay}>0</NumBtn>
              <NumBtn handleClick={this.addToCalcDisplay}>.</NumBtn>
            </div>
          </div>

          <div className="operatorpad">
            <div className="mult-minus-add-btns">
              <OperatorBtn handleClick={this.addToCalcDisplay}>*</OperatorBtn>
              <OperatorBtn handleClick={this.addToCalcDisplay}>-</OperatorBtn>
              <OperatorBtn handleClick={this.addToCalcDisplay}>+</OperatorBtn>
            </div>
            <div className="equalbtn">
              <EqualBtn handleClick={this.handleEqual}>=</EqualBtn>
            </div>
          </div>
        </div> */}

        {/* grid and flexbox */}
        <div className="keypad">
            <div className="row-1">
              <ClearBtn id="btn-clear" handleClear={() => this.setState({calcDisplay: "0"})}>C</ClearBtn>
              {/* <div className="blank">?</div> */}
              <OperatorBtn id="btn-divide" handleClick={this.addToCalcDisplay}>/</OperatorBtn>
              <OperatorBtn id="btn-mult" handleClick={this.addToCalcDisplay}>*</OperatorBtn>
            </div>
            <div className="row-2">
              <NumBtn id="btn-7" handleClick={this.addToCalcDisplay}>7</NumBtn>
              <NumBtn id="btn-8" handleClick={this.addToCalcDisplay}>8</NumBtn>
              <NumBtn id="btn-9" handleClick={this.addToCalcDisplay}>9</NumBtn>
              <OperatorBtn id="btn-minus" handleClick={this.addToCalcDisplay}>-</OperatorBtn>
            </div>
            <div className="row-3">
              <NumBtn id="btn-4" handleClick={this.addToCalcDisplay}>4</NumBtn>
              <NumBtn id="btn-5" handleClick={this.addToCalcDisplay}>5</NumBtn>
              <NumBtn id="btn-6" handleClick={this.addToCalcDisplay}>6</NumBtn>
              <OperatorBtn id="btn-add" handleClick={this.addToCalcDisplay}>+</OperatorBtn>
            </div>
            <div className="row-4">
              <NumBtn id="btn-1" handleClick={this.addToCalcDisplay}>1</NumBtn>
              <NumBtn id="btn-2" handleClick={this.addToCalcDisplay}>2</NumBtn>
              <NumBtn id="btn-3" handleClick={this.addToCalcDisplay}>3</NumBtn>
              <EqualBtn id="btn-equal" handleClick={this.handleEqual}>=</EqualBtn>
            </div>
            <div className="row-5">
              <NumBtn className="zero" id="btn-0" className="zero" handleClick={this.addToCalcDisplay}>0</NumBtn>
              <NumBtn id="btn-decimal" handleClick={this.addToCalcDisplay}>.</NumBtn>
            </div>


        </div>

        <div className="footer"></div>
      </div>
    </div>
  );
};
}

export default App