import React from 'React'
import Comp from '../lib/comp'
import { PrivateKey } from 'Bitcore'
import * as BC from '../api/blockcypher'

class AddressBalance extends Comp {
  // props
  address() {
    return new PrivateKey().toAddress().toString()
  }
  balance() {
    let bal = this.getBalance( this.address() )
    return bal
  }
  // render -.-v
  render() {
    return <div>
      <div>Address: { this.address() }</div>
      <div>Balance: { this.balance() } mBTC</div>
    </div>
  }
  // api
  getBalance() {
    return BC()
  }
}

export default AddressBalance
