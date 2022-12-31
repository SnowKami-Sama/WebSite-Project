import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from "react";
import { ModifierFlags } from "typescript";

const Toolbar = () => {

  let modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

  return (
    <>
    <div>
    <h1>Project 3 : Toolbar</h1>
    </div>
    <div style={{border: "2px solid black" ,margin:"50" ,background: "white"}}>
      <ReactQuill
        theme='snow'
        style={{minHeight: '300px'}}
        formats = {['header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video']}
       modules = {modules}
      />
    </div>
    </>
  );
}


export default Toolbar;