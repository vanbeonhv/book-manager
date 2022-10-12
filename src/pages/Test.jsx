import axios from "axios";
import React from "react";

const Test = () => {
  const isbn = Math.round(Math.random() * 100000);
  //prettierignore
  const list = [
    "Jacob",
    "Michael",
    "Ethan",
    "Joshua",
    "Daniel",
    "Alexander",
    "Anthony",
    "William",
    "Christopher",
    "Matthew",
    "Jayden",
    "Andrew",
    "Joseph",
    "David",
    "Noah",
    "Aiden",
    "James",
    "Ryan",
    "Logan",
    "John",
    "Nathan",
    "Elijah",
    "Christian",
    "Gabriel",
    "Benjamin",
  ];
  const pickRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  let randomName;
  randomName = pickRandom(list);

  const handle = () => {
    // axios.post("http://localhost:3001/api/books", { });
    console.log(randomName);
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
