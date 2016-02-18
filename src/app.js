import { createStore } from 'Redux'
import React from 'React'
import { render } from 'ReactDOM'
import { Provider as Conn } from 'ReactRedux' // Connector

// components
import Address from './comp/address'
import Example from './comp/example'


const c = console
const d = document


// store & controller (redux)

let init = false

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCR":
      return state + 1
    case "INCR":
      return state - 1
    default:
      if (init)
        console.log(`action: ${action.type} - no state change`)
      init = true
      return state
  }
}

const store = createStore(counter)
window.store = store



// views (react)


// components

const CounterButton = React.createClass({
  handleClick(event) {
    store.dispatch({ type: 'INCR' })
  },
  render() {
    return (
      <button onClick={this.handleClick}>
        Incr
      </button>
    )
  }
})





const mainRender = () => {
  render(
    <div>
      <h1>Capp2Work!!!!1!!1!</h1>
      <Conn store={store}>
        <div>
          <Example />
          <Address />
        </div>
      </Conn>

      <CounterButton />
    </div>,
    d.querySelector('.container')
  )
}


// main render

mainRender()

store.subscribe(() =>
  mainRender()
)
