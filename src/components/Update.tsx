import *as React from 'react';
import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useLocation } from "react-router-dom"

function Update(){

    const location = useLocation();

    const [writeContent, setWriteContent] = useState({
        title: location.state.title,
        content: location.state.contents
    });    


    const getValue = (e :React.FormEvent<HTMLInputElement>) =>{
        const {name, value} = e.target as HTMLInputElement;
        setWriteContent({
            ...writeContent,
            [name]: value
        });
        console.log(writeContent); 
    };

    const sendData = (event : React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        //alert(JSON.stringify(writeContent));
        axios.post('http://localhost:8090/update',{
            id: location.state._id,
            title: writeContent.title,
            content: writeContent.content
        }).then(response => {
            console.log(response)
        }).catch(response => {
            console.log(response);
        });
    };

    

    return(
        <div className='Write-place'>
            <div className='form-wrapper'>
                <input className="title-input" 
                    type='text' 
                    placeholder='제목'
                    onChange={getValue}
                    name='title'
                    value= {`${writeContent.title}`}
                />
                <CKEditor
                    editor={ClassicEditor}
                    data={`${writeContent.content}`}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setWriteContent({
                            ...writeContent,
                            content: data
                        })
                        console.log(writeContent);
                    }}
                    onBlur={(event, editor) => {
                        //console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        //console.log('Focus.', editor);
                    }}
                />
                
            </div>
            <form onSubmit={sendData}>
                <button className="save-button"
                        onClick={()=>{
                            document.location.href = '/boardList';
                        }}
                >저장
                </button>
            </form>
        </div>
            
    );
}

export default Update;