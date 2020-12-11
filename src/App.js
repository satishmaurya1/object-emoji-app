import React, { useState } from "react";
import "./styles.css";

var emojiDic = {
  "🏹": "Bow and Arrow",
  "🎬": "Clapper Board",
  "🥁": " Drum",
  "🎻": " Violin",
  "🎺": " Trumpet",
  " 🎹 ": "Musical Keyboard",
  "🎸": " Guitar",
  " 🎷": "Saxophone",
  "  🎧 ": "Headphone",
  " 🎤": " Microphone",
  " 🎼": "Musical Score",
  "🏓": " Ping Pong",
  "🏸": " Badminton",
  "🥊 ": "Boxing Glove",
  "🥋": " Martial Arts Uniform",
  "🥅": "Goal Net",
  "⛳": "Flag in Hole",
  "⛸️ ": "Ice Skate",
  "🎣": "Fishing Pole",
  "🎽": " Running Shirt",
  "🎿": "Skis",
  "🛷": "Sled",
  "🥌": "Curling Stone",
  "🎯": "Direct Hit",
  "🎱": "Pool 8 Ball",
  "🎮": " Video Game",
  "🎰": "Slot Machine",
  "🎲": " Game Die",
  "🛶": "Canoe",
  "🎗️": "Reminder Ribbon",
  "🎟️": "Admission Tickets",
  "🎫": " Ticket",
  "🎖️ ": "Military Medal"
};

function App() {
  const emojiVar = Object.keys(emojiDic);
  const [meaning, setMeaning] = useState(" ");

  function onchangeHandler(event) {
    var input = event.target.value;
    var meaning = emojiDic[input];
    setMeaning(meaning);
  }

  function onclickHandler(item) {
    var meaning = emojiDic[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>OBJECT FINDER APP</h1>
      <br />
      <input
        placeholder="Enter the emoji here"
        className="inputElem"
        onChange={onchangeHandler}
      ></input>
      <br />
      <br />
      <h2>
        Meaning will come here:
        <span style={{ fontSize: "1.8rem", color: "red", marginTop: "1rem" }}>
          {meaning}
        </span>
        <br />
        <br /> Click on the object to know the name <br /> <br />
      </h2>

      {emojiVar.map((item) => {
        return (
          <>
            <p
              className="itemPara"
              onClick={() => onclickHandler(item)}
              style={{
                display: "inline",

                cursor: "pointer",
                margin: "2rem",
                fontSize: "2rem"
              }}
            >
              {item}
            </p>
          </>
        );
      })}
    </div>
  );
}

export default App;
