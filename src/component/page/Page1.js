import React, {Component} from 'react';
import './Page1.css'
import image from '@/assets/image/2 - 64549508_p0.png'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    return (
      <div className='page-box'>
        this is home~哈 milk dodo kanadaxx <br/>
        当前计数：{this.state.count}<br/>
        <button onClick={() => this._handleClick()}>自增</button>
        <img src={image} alt="" className='pic'/>
      </div>
    )
  }
}
