import React from 'react'
import GetRouter from '@/router/router'
import { hot } from 'react-hot-loader'
function App() {

  return (
    <div>
      <h1>寒蝉凄切，对长亭晚，骤雨初歇，都门帐饮无绪，留念处，兰舟催发。执手相看泪眼，竟无语凝噎。
        念去去，千里烟波，暮霭沉沉楚天阔。</h1>
      { GetRouter() }
    </div>
  )
}

export default hot(module)(App)
