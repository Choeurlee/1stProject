import React from "react";
import ReactPlayer from "react-player";
export function TextContent2({ character }) {
  return (
    <div className="text-content2">
      <div className="sidebar">
        <div className="row">
          <div className="col">
            <h3>{character.name}</h3>
          </div>
          <div className="w-100" />
          <div className="col">
            <img src={"/static/" + character.image} />
          </div>
        </div>
      </div>
      <div className="text-box">
        <h1>Overview</h1>
        <hr />
        <p>{character.backstory}</p>
        <br /> <br />
        <h2>Powers and Abilities</h2>
        <hr />
        <p>{character.powers}</p>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=" + character.video}
          
        />
      </div>

      <div className="text-box2" />
    </div>
  );
}
