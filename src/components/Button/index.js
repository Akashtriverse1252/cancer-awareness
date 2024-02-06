import React from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  return (
    <button type="submit" className={`btn ${props.addClass ? props.addClass : ""}`}>
      {props.openInNewTab ? (
        <a href={props.Btn_Link} target="_blank" rel="noopener noreferrer">
          <span>{props.children}</span>
        </a>
      ) : (
        <div>
          <span>{props.children}</span>
        </div>
      )}
    </button>
  );
};

export default Index;
