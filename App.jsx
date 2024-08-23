
import React from 'react'
import "./App.css";
import Card from './card';
import credit from './credit.js';



function App() {
  return (
<div className="flex">
  <Card
  imgURL={credit[0].imgURL}
        name={credit[0].name} 
        para={credit[0].para}
  />
  <Card imgURL={credit[1].imgURL}
        name={credit[1].name}
        para={credit[1].para}/>
</div>
  )
}

export default App
