import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    // console.log("LowerCase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const replacefunc = () => {
    let existing_text = prompt("Find:");
    let replace_word = prompt("Replace with:");
    setText(text.replaceAll(existing_text, replace_word));
    props.showAlert("words replaced!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("speaking", "success");
  };

  const capitalizeFirst = ()=>{
    let newText = text.toLowerCase();
    const arr = newText.split(" ");
    for(var i = 0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const newText2 = arr.join(" ");
    setText(newText2);
  }
  const [text, setText] = useState("Enter text here2");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="py-3">
        <h2>{props.heading}</h2>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <div className="btns row">
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={handleUpClick}>
              Convert to UpperCase
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary " onClick={handleLowClick}>
              Convert to LowerCase
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success  " onClick={replacefunc}>
              Find And Replace
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-success" onClick={speak}>
              Speek
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pt-3">
          <button className="btn btn-danger" onClick={capitalizeFirst}>
              Capitalize Each Word's First Letter
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
