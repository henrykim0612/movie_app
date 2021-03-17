import PropTypes from 'prop-types';
import * as React from "react";

class App extends React.Component {

  state = {
    count: 0
  }

  /* setState를 호출할때마다 리액트는 새로운 state와 함께 render 함수를 호출한다. */
  add = () => {
    // Current 라는 함수를 제공해주기 때문에 State 에 접근 가능함.
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    // this.state 로 접근하는 방법은 좋지 않다. add 함수처럼 접근하는 것이 좋음.
    this.setState({count: this.state.count - 1});
  }


  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>

    );
  }
}



// EXAMPLE
/*
function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h2>{rating} / 10 </h2>
      <img src={picture} alt={name}/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodList = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://www.youngnong.co.kr/news/photo/201903/23371_17010_2150.png',
    rating: 5
  },
  {
    id: 2,
    name: '김밥',
    image: 'https://cdn.eyesmag.com/content/uploads/sliderImages/2020/03/04/ramen-and-gimbap-07-7d900d4b-8c20-4ff0-8f37-50579e73a152.jpg',
    rating: 9
  }
];

// Function Component 라고 부름
function App() {
  return (
    <div>
      {foodList.map(props => (
        <Food
          key={props.id}
          name={props.name}
          picture={props.image}
          rating={props.rating}
        />
      ))}
    </div>
  )
}
*/

export default App;

