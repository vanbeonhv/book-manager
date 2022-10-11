import axios from "axios";
import React from "react";

const Test = () => {
  const handle = () => {
    axios.post("http://localhost:3001/api/books", { ISBN: "12212" });
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handle}>
        Button
      </button>
    </div>
  );
};

export default Test;
