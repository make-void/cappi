`import axios from 'axios'`

c = console

class BCyp
  HOST = "https://api.blockcypher.com"
  ROOT = "#{HOST}/v1/btc/main"

  constructor: (@address) ->

  url_balance: (address) ->
    "#{ROOT}/addrs/#{address}/balance"

  balance: ->
    new Promise (resolve, reject) =>
      url = @url_balance @address
      axios.get(url)
        .then (resp) ->
          resolve resp.data
        .catch (err) ->
          c.error err

  utxos: ->
    address = @address
    unspentUrl = "http://api.blockcypher.com/v1/btc/main/addrs/#{address}/full"
    utxos = []
    new Promise (resolve, reject) ->
      axios.get unspentUrl
        .then (res) ->
          txs = res.data.txs
          txs.forEach (tx) ->
            outputs = tx.outputs
            outputs.forEach (output, idx) ->
              outputAddress = output.addresses[0]
              if !output.spent_by and outputAddress == address
                utxos.push
                  tx_hash: tx.hash
                  output_n: idx
                  script: output.script
                  value: output.value
          c.log 'Unspent transaction outputs:', utxos
          resolve utxos
        .catch (err) ->
          c.error 'Houston, we have a problem:', err
          reject err


`export default BCyp`
