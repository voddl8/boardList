import *as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Register(){

    const [login, setLogin] = useState({
        id: '초기 id값',
        pw: '초기 pw값'
    });

    const getValue = (e :React.FormEvent<HTMLInputElement>) =>{
        const {name, value} = e.target as HTMLInputElement;
        setLogin({
            ...login,
            [name]: value
        });
        console.log(login); 
    };

    const sendData = (event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        //alert(JSON.stringify(writeContent));
        axios.post('http://localhost:8090/login',{
            loginId: login.id,
            loginPw: login.pw
        }).then(response => {
            console.log(response)
        }).catch(response => {
            console.log(response);
        });
    };


    return(
        <div>
            <form action="/register" method="POST">
                <div style={{textAlign: 'center'}}>
                    <p><input type="text" placeholder="아이디" name="id"></input></p>
                    <p><input type="password" placeholder="비밀번호" name="pw"></input></p>
                    <p><button type="submit">회원가입</button></p>
                </div>
            </form>
        </div>

    );
}

export default Register;