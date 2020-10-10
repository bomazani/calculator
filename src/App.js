import React from 'react';
import './App.css';
import { NumBtn } from './components/NumBtn';
import { OperatorBtn } from './components/OperatorBtn';
import { ClearBtn } from './components/ClearBtn';
import { CalcDisplay } from './components/CalcDisplay';
import { BurgerMenu } from './components/BurgerMenu';

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div class="header">
          <BurgerMenu>Menu</BurgerMenu>
        </div>

        <div class="calc-display">
          <CalcDisplay>Display</CalcDisplay>
        </div>

        <div className="keypad">
          <div className="row">
            <ClearBtn>C</ClearBtn>
            <div className="bank"></div>
            <OperatorBtn>/</OperatorBtn>
            <OperatorBtn>*</OperatorBtn>
          </div>
          <div className="row">
            <NumBtn>7</NumBtn>
            <NumBtn>8</NumBtn>
            <NumBtn>9</NumBtn>
            <OperatorBtn>-</OperatorBtn>
          </div>
          <div className="row">
            <NumBtn>4</NumBtn>
            <NumBtn>5</NumBtn>
            <NumBtn>6</NumBtn>
            <OperatorBtn>+</OperatorBtn>
          </div>
          <div className="row">
            <NumBtn>1</NumBtn>
            <NumBtn>2</NumBtn>
            <NumBtn>3</NumBtn>
            <OperatorBtn>=</OperatorBtn>
          </div>
          <div className="row">
            <NumBtn>0</NumBtn>
            <NumBtn>.</NumBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
