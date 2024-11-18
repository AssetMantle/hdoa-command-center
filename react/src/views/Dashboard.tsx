import React, { useState } from "react";

export default function Dashboard() {
  const [Left, setLeft] = useState("");
  const [Right, setRight] = useState("");
  return (
    <main className="container grid grid-cols-12 grid-rows-12 gap-2">
      <div className="left">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
      </div>
      <div className="top">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
        <div className="icons">icon4</div>
      </div>
      <div className="center flex">
        <input
          className="border-2 rounded-2xl"
          type="text"
          value={Left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder=""
          required
        />
        <div className="button">Center button</div>
        <input
          className="border-2 rounded-2xl"
          type="text"
          value={Right}
          onChange={(e) => setRight(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="right">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
        <div className="icons">icon4</div>
        <div className="icons">icon5</div>
        <div className="icons">icon6</div>
      </div>
      <div className="bottom">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
      </div>
    </main>
  );
}
