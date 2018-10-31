import React from 'react'
import GetRouter from '@/router/router'
import { hot } from 'react-hot-loader'
import Page1 from './page/Page1'

function App() {

  return (
    <div>
      <h1>寒蝉凄切，对长亭晚，骤雨初歇，都门帐饮无绪，留念处，兰舟催发。
        执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。</h1>
      <h1>
        多情自古伤离别，更那堪，冷落清秋节。今宵酒醒何处？杨柳岸，晓风残月。
        此去经年，应是良辰好景虚设。
        便纵有千种风情，更与何人说。more get 下XX 66xx 66
      </h1>
      { GetRouter() }
      <Page1/>
    </div>
  )
}

export default hot(module)(App)
//export default App
