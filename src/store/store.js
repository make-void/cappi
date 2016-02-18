import { createStore } from 'Redux'

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

export default store
