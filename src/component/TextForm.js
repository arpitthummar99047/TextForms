import React, { useState } from "react";

export default function TextForm(props) {
  // Convert Text to Upper Case
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert(" Convert to Uapper Case", "success ");
  };

  // Convert Text to Lower case
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Convert to Lower Case", "success ");
  };

  // Convert First letter to Capital
  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);

    props.showAlert(" Convert to Capitalize", "success ");
  };

  // Reverce the Text
  const handelReverceClick = () => {
    let str = text.split("");

    str = str.reverse();

    let newText = str.join("");
    setText(newText);

    props.showAlert(" Convert to Reverce", "success ");
  };

  // Copy Text

  const handelCopy = () => {
    window.navigator.clipboard.writeText(text);

    props.showAlert(" Copy Text to Clipbord", "success ");
  };

  // Remove Extra Spaces

  const handalExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Remove extra Space from Text", "success ");
  };

  // Clear The Text
  const handelclearClick = () => {
    setText("");

    props.showAlert(" Clear Text", "success ");
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0F3B58",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-2 my-1"
              : "btn btn-primary mx-2 my-1"
          }`}
          onClick={handelUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-2 my-1"
              : "btn btn-primary mx-2 my-1"
          }`}
          onClick={handelLoClick}
        >
          Convert to LowerCase
        </button>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-2 my-1"
              : "btn btn-primary mx-2 my-1"
          }`}
          onClick={handleCapitalizeWordClick}
        >
          Capitalize
        </button>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-2 my-1"
              : "btn btn-primary mx-2 my-1"
          }`}
          onClick={handelReverceClick}
        >
          Reverce Text
        </button>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-2 my-1"
              : "btn btn-primary mx-2 my-1"
          }`}
          onClick={handalExtraSpace}
        >
          Remove Extra Space
        </button>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-primary mx-2 my-1"
              : "btn btn-primary mx-2 my-1"
          }`}
          onClick={handelCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className={`${
            props.mode === "light"
              ? "btn btn-outline-danger mx-2 my-1"
              : "btn btn-danger mx-2 my-1"
          }`}
          onClick={handelclearClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary is here</h2>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>

        <p>
          {0.008 *
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Reade in menutes
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing  to Perview"}</p>
      </div>
    </>
  );
}
