import *as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';


function BoardList(){
    const [dataList, setDataList] = useState<any>([]);

    useEffect(()=>{
        fetch('http://localhost:8090/boardList')
        .then((response) => response.json())
        .then((data) => setDataList(data));
    },[]);
    
    return(
        <div>            
            {
                dataList?.map((data :any) =>{
                    return(
                    <div className='List' key={data._id}>
                        <div className='UnderLine'>                            
                                <Link style={{color: 'black'}} to={'/boardList/writed'} state={{
                                        _id: data._id,
                                        title: data.title,
                                        contents : data.contents
                                    }}>
                                    {data.title}
                                </Link>
                        </div>
                    </div> 
                    )  
                })
            }
            <Link to= "/boardList/write" style={
                {color : 'black', paddingLeft: '10px', fontSize: '20px', fontWeight: 'bold'}}>
                글쓰기</Link>
        </div>



    );
}

export default BoardList;