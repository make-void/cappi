`import { PrivateKey } from 'Bitcore'`

store = localStorage

privateKey = null

privateKey = if store.privateKey
  new PrivateKey(store.privateKey)
else
  privateKey = new PrivateKey
  privateKeyWif = privateKey.toWIF()
  store.privateKey = privateKeyWif
  console.log 'Private key saved successfully!'
  console.log 'Refresh the page or check your \'Resources > Local Storage\' from the developer tools'
  
address = privateKey.toAddress().toString()


`export privateKey, address`
