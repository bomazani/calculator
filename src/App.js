import React, {Component } from 'react';
import './App.css';
import { NumBtn } from './components/NumBtn';
import { OperatorBtn } from './components/OperatorBtn';
import { ClearBtn } from './components/ClearBtn';
import { CalcDisplay } from './components/CalcDisplay';
import { BurgerMenu } from './components/BurgerMenu';
import { evaluate } from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calcDisplay: "0"
    };
  }

  addToCalcDisplay = val => {
    if (this.state.calcDisplay == 0) {
      (this.setState({calcDisplay: val}))
    }else{ 
      this.setState({ calcDisplay: this.state.calcDisplay + val })
    };
  };

  handleEqual = () => {
    this.setState({calcDisplay: evaluate(this.state.calcDisplay) })
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div class="header">
            <BurgerMenu>Menu</BurgerMenu>
          </div>

          <div class="calc-display">
            <CalcDisplay calcDisplay={this.state.calcDisplay} />
          </div>

          <div className="keypad">
            <div className="numberpad"></div>

              <div className="upper-pad">
                <div className="row">
                  <ClearBtn handleClear={() => this.setState({calcDisplay: "0"})}>C</ClearBtn>
                  <div className="blank">?</div>
                  <OperatorBtn handleClick={this.addToCalcDisplay}>/</OperatorBtn>
                  <OperatorBtn handleClick={this.addToCalcDisplay}>*</OperatorBtn>
                </div>
                <div className="row">
                  <NumBtn handleClick={this.addToCalcDisplay}>7</NumBtn>
                  <NumBtn handleClick={this.addToCalcDisplay}>8</NumBtn>
                  <NumBtn handleClick={this.addToCalcDisplay}>9</NumBtn>
                  <OperatorBtn handleClick={this.addToCalcDisplay}>-</OperatorBtn>
                </div>
                <div className="row">
                  <NumBtn handleClick={this.addToCalcDisplay}>4</NumBtn>
                  <NumBtn handleClick={this.addToCalcDisplay}>5</NumBtn>
                  <NumBtn handleClick={this.addToCalcDisplay}>6</NumBtn>
                  <OperatorBtn handleClick={this.addToCalcDisplay}>+</OperatorBtn>
                </div>
              </div>

              <div className="lower-pad">

                <div className="lower-pad left">
                  <div className="lower-left" id="top">
                    <div className="row">
                      <NumBtn handleClick={this.addToCalcDisplay}>1</NumBtn>
                      <NumBtn handleClick={this.addToCalcDisplay}>2</NumBtn>
                      <NumBtn handleClick={this.addToCalcDisplay}>3</NumBtn>
                    </div>
                  </div>
                  <div className="lower-left" id="bottom">
                    <NumBtn className="zero" handleClick={this.addToCalcDisplay}>0</NumBtn>
                    <NumBtn handleClick={this.addToCalcDisplay}>.</NumBtn>
                  </div>
                </div>

                <div className="lower-pad right">
                  <div className="operatorBtn equal">
                    <OperatorBtn handleClick={this.addToCalcDisplay}>=</OperatorBtn>
                  </div>
                </div>

              </div>

            </div>
            {/* <div className="operaterpad">
              <OperatorBtn handleClick={this.addToCalcDisplay}>*</OperatorBtn>
              <OperatorBtn handleClick={this.addToCalcDisplay}>-</OperatorBtn>
              <OperatorBtn handleClick={this.addToCalcDisplay}>+</OperatorBtn>
              <OperatorBtn handleClick={() => this.handleEqual()}>=</OperatorBtn>
            </div> */}
          </div>
      </div>
    );
  }
}
export default App;
