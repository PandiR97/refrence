import React from 'react';
import Loading from './Loading';
import Navbar from './Navbar';
import Crads from './Crads';

class Lifecycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: <Loading /> };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: <Navbar/>})
      }, 1000)
    }
    componentDidUpdate() {
        setTimeout(() => {
            this.setState({favoritecolor: <Crads/>})
          }, 1000)
    }
    render() {
      return (
        <div>
        <div>{this.state.favoritecolor}</div>
        <div id="mydiv"></div>
        </div>
      );
    }
  }

export default Lifecycle