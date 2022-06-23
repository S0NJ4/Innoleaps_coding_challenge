import React, { useState } from "react";

const App = () => {
  const [InputArr, SetInputArr] = useState([]);
  const [ArrText, SetArrText] = useState("");

  const addToArr = () => {
    SetInputArr((InputArr) => [...InputArr, ArrText]);
    SetArrText("");
  };

  return (
    <div className="App" style={style.body}>
      <div style={style.inputBox}>
        <input
          style={style.input}
          type="text"
          placeholder="Type here"
          value={ArrText}
          onChange={(e) => SetArrText(e.target.value)}
        />
        <button
          style={style.button}
          onClick={() => (ArrText.trim() !== "" ? addToArr() : SetArrText(""))}
          //added tenary operator to avoid blank items from being added 
          //addToArr Created in order for the input to reset after clicking the button
        >
          Add to list
        </button>
      </div>
      {InputArr.map((InputItem, index) => (
        <div
          style={style.ListItem}
          key={index}
          onClick={() =>
            SetInputArr((InputArr) =>
              InputArr.filter((InputArr, key) => key !== index)
              // used filter to remove selected via the key in order for the code to ignore duplicates and only deletes the selected one 
            )
          }
        >
          {InputItem}
        </div>
      ))}
    </div>
  );
};

const style = {
  ListItem: {
    background: "#6677cc",
    borderRadius: "37px",
    width: "30%",
    color: "white",
    padding: "10px",
    margin: "3px",
    textAlign: "center",
    overflowWrap: "break-word",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  inputBox: {
    margin: "8px",
    width:'30%',
    padding:'15px',
  },
  button: {
    width:'35%',
margin:'7px',
    height:"27px",
    borderRadius:'2px',
    borderWidth:'0',

  },
  input: {
    width:'60%',
    height:"27px",
    borderRadius:'8px',
    borderWidth:'0',
  },
};

export default App;
