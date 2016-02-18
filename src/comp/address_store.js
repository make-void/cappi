import React from 'React'
import Comp from '../lib/comp'
import { PrivateKey } from 'Bitcore'

class AddressStore extends Comp {
  address() {
    // TODO: localstorage
    return new PrivateKey().toAddress().toString()
  }
  render() {
    return <div>
      <div>Address: { this.address() }</div>
    </div>
  }
}

export default AddressStore
