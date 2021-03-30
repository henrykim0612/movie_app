import React from "react";

class Detail extends React.Component {

  componentDidMount() {
    const {location, history} = this.props;
    if (location.state === undefined) {
      history.push('/'); // 리다이렉트 하기 위해서 히스토리 추가
    }
  }

  render() {
    const {location} = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>
    } else {
      return null;
    }
  }

}

export default Detail;