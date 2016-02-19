import React from 'React'
import { render } from 'ReactDOM'
import { Provider as Conn } from 'ReactRedux' // Connector
import store from './store/store'

// components // TODO: autoimport
import Address    from './comp/address'
import Example    from './comp/example'
import CounterBtn from './comp/counter_btn'
import AddressBalance    from './comp/address_balance'

// api
import BCypz from './api/blockcypher'

const c = console
const d = document


// main render (main react element)

const mainRender = () => {
  render(
    <div>
      <h5>Cappi.work</h5>
      <Conn store={store}>
        <div>
          <Example />
          <AddressBalance />
          <div className="s20"></div>
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

// main data



// api
const getBalance = (address) => {
  return new BCypz(address).balance()
}

const getUTXOs = (address) => {
  return new BCypz(address).utxos()
}

// TODO: load from localstorage
import { PrivateKey } from 'Bitcore'

let address = new PrivateKey().toAddress().toString()

getBalance(address)
  .then((balance) => {
    balance = balance.unconfirmed_balance
    console.log("unconfirmed_balance:", balance)
    store.dispatch({ type: 'BALANCE', value: balance })
  })
  // .catch()

getUTXOs(address)
  .then((utxos) => {
    c.log("UTXOS:", utxos)
    // balance = balance.unconfirmed_balance
    // console.log("unconfirmed_balance:", balance)
    // store.dispatch({ type: 'BALANCE', value: balance })
  })
