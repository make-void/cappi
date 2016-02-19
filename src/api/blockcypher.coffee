`import axios from 'axios'`

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
          console.error err



`export default BCyp`
