import *as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom"
import axios from 'axios';


function Writed(){

    const location = useLocation();

    const deleteData = () =>{
        axios.post('http://localhost:8090/delete',{
            delId : location.state._id
        })
        .then(response=>{
            console.log('삭제완료')
        })
    };

    return(
        <div className='Write-place'>
            <div className='form-wrapper'>
                <h3>{location.state.title}</h3>     
            </div>
            <div className='padding-contents' dangerouslySetInnerHTML={{__html: location.state.contents}}>
            </div>
            
            <div className='padding-button'>
                <Link to={"/boardList/update"} state={{
                    _id: location.state._id,
                    title: location.state.title,
                    contents: location.state.contents 
                }} style={{color : 'black', display: 'flex'}}>수정하기
                </Link>
            </div>
            <div className='padding-button'>
            <Link to={"/boardList"}
                  style={{color : 'red', display: 'flex'}}
                  onClick={deleteData}>삭제하기
                </Link>
            </div>
        </div>
            
    );
}

export default Writed;