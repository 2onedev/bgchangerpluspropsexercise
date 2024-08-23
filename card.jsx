import React, { Component } from "react";


function Card(props) {
  return (
    <div className="h-[600px] ml-[20px] w-[300px] rounded-lg bg-white text-black">
      <img className="rounded-lg"   src={props.imgURL}/>
      <h1>{props.name}</h1>
      <p>{props.para}</p>
    </div>
  );
}

export default Card;
