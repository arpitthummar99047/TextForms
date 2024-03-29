import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-3 rounded"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="my-3">{props.about}</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0F3B58",
                color: props.mode === "light" ? "black" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#010525",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
            TextSpark gives you a way to analyze your text quickly and
              efficiently. Be it word count,Character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0F3B58",
                color: props.mode === "light" ? "black" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#010525",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextSpark is a free Character counter tool that provide instant
              Character count & word count statistics for a given text.TextSpark
              report the number of words and Character. thus it is suitable for
              working text with words / Character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0F3B58",
                color: props.mode === "light" ? "black" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatibel</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#010525",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              This word counte software works in any web browser such as a
              Chrome, firefox, Internet Explorer, Safari, Opera. It suits to
              count Character in facebook, blog, books, excel document, pdf
              document, essays, etc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
