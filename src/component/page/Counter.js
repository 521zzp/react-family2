import React from 'react'
import { increment, decrement, reset } from "../../store/actions/counter";

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
      <button onClick={ () => inc() }>自增</button>

      <button onClick={ () => dec() }>自减</button>

      <button onClick={ () => res() }>重置</button>

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
