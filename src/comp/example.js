import React from 'React'
import Comp from '../lib/comp'

class Example extends Comp {
  render() {
    return <div>Hello {this.context.store.getState()}</div>
  }
}

export default Example
