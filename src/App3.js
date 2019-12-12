import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//하나의 클래스 컴포넌트로 뭉쳐서 함수들을 각각 호출한다.
class App3 extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  //asycn 는 비동기 함수라고 지정하는 명령어
  getMovies = async () => {

    //await는 기다렸다가 진행하라는 뜻
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    //console.log(movies.data.data.movies);
    //위의 동작을 아래와 같이 es6를 사용하여 바꿀수 있다.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({ movies, isLoading: false })
    //this.setState({movies:movies}) // 둘다 같은
  }
  componentDidMount() {
    this.getMovies();

    //timeout을줘서 단순 데이터 오는거 확인
    // const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
    // setTimeout(() => {
    //   this.setState({isLoading : false, book : true})
    // }, 3000);

  }
  render() {
    //const는 자동적으로 state의 상태를 계속해서 따라가게 된다.
    const { isLoading, movies } = this.state;
    //return <div>{isLoading ? "Loading...." : "We are Ready!!!!"}</div>;
    return (
      <section className="container">
        {isLoading ? (
          <div className="Loader">
            <span className="Loader__text">Loading.....</span>
          </div>) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                  />
              ))}
            </div>


            // : movies.map(movie =>(
            // // console.log(movie);
            // <Movie
            // key={movie.id} 
            // id={movie.id} 
            // year={movie.year} 
            // title={movie.title} 
            // summary={movie.summary} 
            // poster={movie.medium_cover_image} />
            // )


          )}</section>);
  }
}

export default App3;
