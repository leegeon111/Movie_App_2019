import React from 'react';
import PropTypes from "prop-types";
// import Potato from "./Potato";



const foodLike  = [
  {
    id :1,
    name : "kimchi",
    image : "http://m.hansanggung.com/web/product/big/hansanggung1_44.jpg",
    rating : 5.0
  },
  {
    id :2,
    name : "ramen",
    image : "http://imgnews.naver.net/image/382/2014/12/21/68697033.2_99_20141221132203.jpg",
    rating : 4.9
  },
  {
    id :3,
    name : "samgiopsal",
    image : "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating : 4.4
  }
  ,
  {
    id :4,
    name : "chukumi",
    image : "https://craftlog.com/m/i/5979130=s1280=h960.webp",
    rating : 4.7
  }
  ,
  {
    id :5,
    name : "ckicken",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20161021_163%2Fkjwkkht1125_1477007862250IDRkB_PNG%2Fclzlsajrwkclaor_%25281%2529.png&type=b400",
    rating : 4.4
  }
]

//반드시 전역변수로 받아서 넘겨줘야한다.
function Food ({name, picture, rating})
{
  //console.log({fav})
  //console.log(prob.fav);
  return (
    <div>
    <h1>I Like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt = {name}/>
    </div>
  )
}
//porptypes는 type 형태를 체크할 수있다.
Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};


// function renderFood (dish)
// {
//   //console.log(dish);
//   return <Food name = {dish.name} picture = {dish.image}/>
// }
function App() {
  return (
    <div className="App">
     {/* <h1>Hello!!</h1>
     <Food fav = "kimchi" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/>
     <Food fav = "ramen" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/>
     <Food fav = "samgiopsal" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/>
     <Food fav = "chukumi" prob = {true} dfjdjfdj = {[1,2,3,4,"hello"]}/> */}
    {/* {foodLike.map(renderFood)} */}

     {
      //foodlike의 값들을 dish로 받아서 뿌려준다.
     foodLike.map(dish =>
     <Food 
        key = {dish.id} 
        name = {dish.name} 
        picture = {dish.image}
        rating = {dish.rating}
     />)
     }
    </div>

  );
}

export default App;
