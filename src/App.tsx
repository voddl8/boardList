import *as React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect} from 'react';

import Navbar from './components/Navbar';
import BoardList from './components/BoardList';
import Write from './components/Write';
import Writed from './components/Writed';
import Update from './components/Update';


function App() {

  return (
    <div>
      <Navbar navOpt ='Home'></Navbar>
      <Routes>
        <Route path='/' element={<div> <h1>간단한 게시판 만들기</h1> </div>}/>
        <Route path='/boardList' element={<BoardList/>}/>
        <Route path='/boardList/write' element={<Write></Write>}/>
        <Route path='/boardList/writed' element={<Writed></Writed>}/>
        <Route path='/boardList/update' element={<Update></Update>}/>
        <Route path='*' element={<div> 잘못된 접속입니다. </div>}/>
      </Routes>
    </div>
  );  
}




export default App;
