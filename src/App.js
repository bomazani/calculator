import React from 'react';
import './App.css';
import { NumBtn } from './components/NumBtn';
import { OperatorBtn } from './components/OperatorBtn';
import { Clear } from './components/ClearBtn';
import { Display } from './components/Display';
import { BurgerMenu } from './components/BurgerMenu';

function App() {
  return (
    <div className="App">
      <div class="header">
        <BurgerMenu></BurgerMenu>
      </div>
      <div class="display">
        <Display>Display</Display>
      </div>
      <div className="keypad">
        <div className="row">
          <Clear>C</Clear>
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
  );
}

export default App;
