import React from 'React'
import { render } from 'ReactDOM'
import { Provider as Conn } from 'ReactRedux' // Connector
import store from './store/store'

// components // TODO: autoimport
import Address    from './comp/address'
import Example    from './comp/example'
import CounterBtn from './comp/counter_btn'


const c = console
const d = document


// store & controller (redux)


// window.store = store



// views (react)

const mainRender = () => {
  render(
    <div>
      <h1>Capp2Work!!!!1!!1!</h1>
      <Conn store={store}>
        <div>
          <Example />
          <Address />
          <CounterBtn />
        </div>
      </Conn>

    </div>,
    d.querySelector('.container')
  )
}


// main render

mainRender()

store.subscribe(() =>
  mainRender()
)
