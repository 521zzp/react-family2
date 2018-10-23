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

      <div>当前技术为{ count }（显示redux）计数</div>
      <button onClick={ () => inc() } className='btn'>自增</button>

      <button onClick={ () => dec() } className='btn'>自减</button>

      <button onClick={ () => res() } className='btn'>重置</button>
      <p>已是黄昏独自愁，测试hash变更</p>
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
