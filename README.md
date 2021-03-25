# Henry's movie app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 2일차
1. this.state 변수의 값을 직접 컨트롤 하는것은 좋지 않다.  
   this.setState(current => ({count: current.count + 1})) 와 같이 current 함수를 이용해 state값을 수정한다.
   

2. setState를 호출하면 리액트는 새로운 state와 함께 클래스 컴포넌트의 render 함수를 호출한다.


## 3일차
1. 리액트는 라이프 사이클이 존재한다.
- componentDidMount() : render() 함수가 호출된 이후 호출.
- componentWillUnmount() : 컴포넌트가 언마운트됨(페이지가 바뀐다거나 할때 호출됨).
- componentWillMount() : DOM 노드에 추가하기 직전에 호출.
2. state 를 필요로 하지 않는 컴포넌트의 경우에는 class 로 만들필요없이 function 으로 만들어도 된다.

## 4일차
1. create-react-app 덕분에 CSS 통합이 쉽다.
2. React 에서 Map 을 호출하여 태그를 만들때는 Key 속성이 반드시 필요함.
3. JSX에서 속성명이 다른것이 있다.    
class -> className(component class 와 겹치므로)  
for -> htmlFor(반복문과 겹치므로)  
   
## 5일차
1. npm i gh-pages 로 깃허브에 사이트를 배포해본다  
package.json 에 "homepage" 를 추가하는데, 주소는 https://{내 유저명}}.github.io/movie_app 으로한다(git remove -v로 확인).
2. npm run deploy 를 호출하면 똑똑하게 만들어둔 predeploy를 호출해줌.



## 5.0 동영상 시청해야함
https://nomadcoders.co/react-fundamentals/lectures/1561

