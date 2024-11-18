import React, { useState } from "react";

export default function Dashboard() {
  const [Left, setLeft] = useState("");
  const [Right, setRight] = useState("");
  return (
    <main className="container grid grid-cols-12 grid-rows-12 gap-2">
      <div className="left col-start-1 col-span-2 row-start-1 row-span-10 flex flex-col gap-4 p-4">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
      </div>
      <div className="top col-start-3 col-span-10 row-start-1 row-span-2 flex gap-4 p-4">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
        <div className="icons">icon4</div>
      </div>
      <div className="center col-start-3 col-span-8 row-start-3 row-span-8 flex items-center gap-4 p-4">
        <input
          className="border-2 rounded-4 px-2 py-1"
          type="text"
          value={Left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder=""
          required
        />
        <div className="button">Center button</div>
        <input
          className="border-2 rounded-4 px-2 py-1"
          type="text"
          value={Right}
          onChange={(e) => setRight(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="right col-start-11 col-span-2 row-start-3 row-span-10 flex flex-col gap-4 p-4">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
        <div className="icons">icon4</div>
        <div className="icons">icon5</div>
        <div className="icons">icon6</div>
      </div>
      <div className="bottom col-start-1 col-span-10 row-start-11 row-span-2 flex gap-4 p-4">
        <div className="icons">icon1</div>
        <div className="icons">icon2</div>
        <div className="icons">icon3</div>
      </div>
    </main>
  );
}
