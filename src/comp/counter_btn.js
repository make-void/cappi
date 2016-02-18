import React from 'React'
import Comp from '../lib/comp'
import store from '../store/store'

class CounterBtn extends Comp {
  handleClick(event) {
    store.dispatch({ type: 'INCR' })
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Incr
      </button>
    )
  }
}

export default CounterBtn
