import React from 'react'
import { useState } from 'react'

  const BgChanger =()=>{
    const [color, setColor] = useState("olive");
    const changeColor = (color) =>{
      setColor(color)
    };
  

  return (
    <>
    <div style={{backgroundColor:color}} className='h-[100vh] w-[100vh]  '>
      <button className='ml-[45px] mt-[800px]' onClick={()=> changeColor('red')}>Red</button>
      <button className='ml-[30px] mt-[100px]' onClick={()=> changeColor('blue')}>Blue</button>
      <button className='ml-[30px] mt-[100px]' onClick={()=> changeColor('green')}>Green</button>
      <button className='ml-[30px] mt-[100px]' onClick={()=> changeColor('purple')}>Purple</button>
      <button className='ml-[30px] mt-[100px]' onClick={()=> changeColor('orange')}>Orange</button>
      <button className='ml-[30px] mt-[100px]' onClick={()=> changeColor('pink')}>Pink</button>
      <button className='ml-[30px] mt-[100px]' onClick={()=> changeColor('yellow')}>Yellow</button>
    </div>
    </>
  );
};


export default BgChanger;