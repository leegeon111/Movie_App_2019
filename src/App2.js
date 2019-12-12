import React from 'react';
import PropTypes from "prop-types";
//하나의 클래스 컴포넌트로 뭉쳐서 함수들을 각각 호출한다.
class App2 extends React.Component{
  state = {
    count:0
  };

  add = () => {
    // console.log("add");
    //current 를 통해서 state의 현재 값을 가져오도록 한다.
    this.setState(current =>({ count: current.count +1 }));
    // this.setState({ count: this.state.count  +1 });
    // this.state.count = 1; // 직접 state를 변경 혹은 수정하면 안된다.
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
    // this.setState({ count: this.state.count  -1 });
    // console.log("minus");
  };
  //load 후 func
  componentDidMount(){
    console.log("Mounted!")
  };
  //update 이후 func
  componentDidUpdate(){
    console.log("updated!!")
  };
  //componet가 끝날때 실행되는 func (다른페이지 이동시에만)
  componentWillUnmount(){
    console.log("Goodbye, cruel world.")
  }
  render(){
    console.log("Im rendering");
    return(
      <div>
        <h1> Im a class componet </h1>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App2;
