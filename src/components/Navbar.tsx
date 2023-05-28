import *as React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { ClassElement } from 'typescript';
import { useState, useEffect} from 'react';
import path from 'path';


function Navbar(props :{navOpt :string}) :JSX.Element{
    

    return(
      <div className="Navbar">
        <Link to='/' id ='Home'><i className="fa-solid fa-house"></i>Home</Link>
        <Link to='/boardList' id ='Board'><i className="fa-solid fa-magnifying-glass"></i>Board</Link>
      </div>
    )
  }

export default Navbar;