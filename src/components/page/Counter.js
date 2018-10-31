import React from 'react'
import { increment, decrement, reset } from "../../store/actions/counter";
import './Counter.css'

import { connect } from 'react-redux'

function Counter({
  inc,
  res,
  dec,
  count
}) {

  return (
    <div>
      <div> counter 测试 1 2 3 4 5 6 7</div>
      <div>当前技术为{ count }（显示redux）计数 此生之情，待来世再报了</div>
      <button onClick={ () => inc() } className='btn'>自增</button>

      <button onClick={ () => dec() } className='btn'>自减</button>

      <button onClick={ () => res() } className='btn'>重置</button>
      <p>已是黄昏独自愁，测试hash变更 2215天涯何处无芳草 </p><br/>
      <div>
        千山鸟飞绝，
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => {
      dispatch(increment())
    },
    dec: () => {
      dispatch(decrement())
    },
    res: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
