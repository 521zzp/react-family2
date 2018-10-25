import React from 'react'
import {Link} from "react-router-dom";
function Home() {

  return (
    <div>
      <ul>
        <li><Link to='/'>主页</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
        <li><Link to='/counter'>counter</Link></li>
        <li><Link to='/userInfo'>UserInfo</Link></li>
      </ul>
      <div>主页</div>
    </div>
  )

}

export default Home
