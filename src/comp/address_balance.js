import React from 'React'
import Comp from '../lib/comp'
import { PrivateKey } from 'Bitcore'

class AddressBalance extends Comp {
  // props
  address() {
    return new PrivateKey().toAddress().toString()
  }
  // render -.-v
  render() {
    let address = this.address()
    this.balance = 0
    return <div>
      <div>Address: { this.address() }</div>
      <div>Balance: { this.balance } mBTC</div>
    </div>
  }
}

export default AddressBalance
