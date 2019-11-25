import React from 'react';
// import Potato from "./Potato";

function Food ({name,picture})
{
  //console.log({fav})
  //console.log(prob.fav);
  return (
    <div>
    <h1>I Like {name}</h1>
    <img src = {picture}/>
    </div>
  )
}

const foodLike  = [
  {
    name : "kimchi",
    image : "http://blogfiles.naver.net/MjAxNjEyMTZfMjk1/MDAxNDgxODU1NDM3MzE2.knBhLySz1SkewPg14I0f4T7fdnByzk8fudGFSdmcwY8g.pM2XrP9GZJ80OzBbF0xgYXdIA7Xdtyn8HR8_F-QgcXYg.JPEG.hwatongkc/%B8%C0%B1%E8%C4%A1640x640.jpg"
  },
  {
    name : "ramen",
    image : "http://imgnews.naver.net/image/382/2014/12/21/68697033.2_99_20141221132203.jpg"
  },
  {
    name : "samgiopsal",
    image : "http://blogfiles.naver.net/20160621_206/zmfsha77_1466499747478xfxc5_JPEG/%BC%DB%B5%B5%BB%F0%B0%E3%BB%EC%B8%C0%C1%FD_%2835%29.JPG"
  }
  ,
  {
    name : "chukumi",
    image : "http://blogfiles.naver.net/20140113_170/qsd4898_1389573848504f8W1X_JPEG/%C1%F8%C1%D6%B8%C0%C1%FD_%C8%F1%BE%DF%B3%D7_%C2%DE%B2%D9%B9%CC9.jpg"
  }
  ,
  {
    name : "ckicken",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20161021_163%2Fkjwkkht1125_1477007862250IDRkB_PNG%2Fclzlsajrwkclaor_%25281%2529.png&type=b400"
  }
]

function App() {
  return (
    <div className="App">
     {/* <h1>Hello!!</h1>
     <Food fav = "kimchi" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/>
     <Food fav = "ramen" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/>
     <Food fav = "samgiopsal" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/>
     <Food fav = "chukumi" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/> */}
     {
     foodLike.map(dish => 
     <Food name = {dish.name} picture = {dish.image}/>)
     }
    </div>
  );
}

export default App;
