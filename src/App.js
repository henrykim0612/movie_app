function Food({name, picture}) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture} alt={name}/>
    </div>
  )
}

const foodList = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://www.youngnong.co.kr/news/photo/201903/23371_17010_2150.png'
  },
  {
    id: 2,
    name: '김밥',
    image: 'https://cdn.eyesmag.com/content/uploads/sliderImages/2020/03/04/ramen-and-gimbap-07-7d900d4b-8c20-4ff0-8f37-50579e73a152.jpg'
  }
];

function renderFood(props) {
  return (
    <div>
      <Food key={props.id} name={props.name} picture={props.image} />
    </div>
  )
}


function App() {
  return (
    <div>
      {foodList.map(props => <Food key={props.id} name={props.name} picture={props.image} />)}
    </div>
  )
}

export default App;
