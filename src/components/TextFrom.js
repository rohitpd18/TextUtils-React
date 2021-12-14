import React, { useState } from "react";

export default function TextFrom(prop) {



  const updateUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Success", "Updated to Uppercase")
  };
  const updateLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Success", "Updated to Lowercase")
  };
  const handCopyText = () => {
    let text= document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    prop.showAlert("Success", "Copy to Clipboard")
  };
  const handExtraSpace = () => {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    prop.showAlert("Success", "Romoved exter space")
  };
  
  const handOneChange = (event) => {
    setText(event.target.value);
  };
  
  
  const clearText = (event) => {
    setText("");
    prop.showAlert("Success", "Clear all text")
  };
  const [text, setText] = useState("");


  return (
    <>
      <div className={`my-2 text-${prop.mode=== "light" ? "dark" : "light"}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>Enter Your text to update</h2>
        </label>
        <textarea
          onChange={handOneChange}
          value={text}
          className={`form-control bg-${prop.mode} `}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button disabled= {text.length===0}
          className="btn btn-primary m-2"
          onClick={updateUppercase}
          onChange={handOneChange}
        >
          Convert to Uppercase
        </button>
        <button disabled= {text.length===0}
          className="btn btn-primary m-2"
          onClick={updateLowercase}
          onChange={handOneChange}
        >
          Convert to Lowercase
        </button>
        <button disabled= {text.length===0}
          className="btn btn-primary m-2"
          onClick={handCopyText}
          onChange={handOneChange}
        >
          Copy Text
        </button>
        <button disabled= {text.length===0}
          className="btn btn-primary m-2"
          onClick={handExtraSpace}
          onChange={handOneChange}
        >
          Remove Extra Space
        </button>
       
        <button disabled= {text.length===0}
          className="btn btn-danger m-2"
          onClick={clearText}
          onChange={handOneChange}
        >
          Clear Text
        </button>
      </div>
      <div className={`container text-${prop.mode=== "light" ? "dark" : "light"}`}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1}words and {text.length}characters
        </p>
        <p>{0.008 * (text.split(" ").length-1)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Type somthing above to preview "}</p>
      </div>
    </>
  );
}
