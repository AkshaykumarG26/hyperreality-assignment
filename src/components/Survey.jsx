import { useState } from "react";
import { Ratings } from "./Ratings";
import "./Style.css";

export const Survey = () => {
  const questions = [
    "How satisfied are you with our products ?",
    "How fair are the prices compared to similar retailers ?",
    "How satisfied are you with the value for money of your purchase ?",
    "On a scale of 1-10 how would you recommend us to your friends and family?",
    "What could we do to improve our service?",
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="container">
        <div className="child">
          <div className="rate">
            <h4>
              {index + 1}/{questions.length}
            </h4>
          </div>
          <b className="questions">{questions[index]}</b>
          <Ratings question={questions[index]} />
          <br />
          <br />

          <button
            className="btn"
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            Pre
          </button>
          <button
            className="btn"
            disabled={index === questions.length}
            onClick={() => setIndex(index + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
