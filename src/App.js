import React from "react";
import Back from "./components/Back";
import appleImage from "./assets/apple.jpeg";
import mangoImage from"./assets/mango.jpg";
import pineappleImage from './assets/pineapple.jpeg';
import grapsImage from './assets/graps.jpg';

function App() {
  const array=[{
    id:1,
    name:"apple",
    img:appleImage,
    class:"round-corners1"
  },
  {
    id:2,
    name:"mango",
    img:mangoImage,
    class:"round-corners2"
  },
{
  id:3,
    name:"pineapple",
    img:pineappleImage,
    class:"round-corners3"
},
{
  id:4,
    name:"graps",
    img:grapsImage,
    class:"round-corners4"
}]
  return (
    <div className="background">
      <div className="text">
        <h1>" Fruit App "</h1>
      </div>
    <div className="App">
      <Back list={array}/>
    </div>
    </div>
  );
}

export default App;

