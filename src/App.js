import React, { useState } from "react";
import images from "./imageData";

function App() {
  const [Value, setValue] = useState("");
  return (
    <>
      <div className="container">
        <div className="chat-card">
          <div className="card-top">
            {images?.map((data) => {
              return (
                <img width="100%" src={data.image} alt="avatar" />
              )
            })}
          </div>
          <div className="comments e">
            <div className="comment my">I commented on Figma, I want to add some fancy icons. Do you have any icon set?</div>
          </div>
          <div className="comments o">
            <div className="comment you">I am in a process of designing some. When do you need them?</div>
          </div>
          <form>
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="Write a message..." />
            <i onClick={() => { console.log(Value); }} className="fa-solid fa-paper-plane"></i>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
