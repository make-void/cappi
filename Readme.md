# Cappi Work


### cappi.work (soon)

Accademia-Cappiello student network and work portal

#### fork of <https://github.com/makevoid/react-redux-rollup-boilerplate>

- s3 upload api
- drag n drop content upload
- title + description (update only, opzionali, dopo aver caricato la foto)

- register

----

ORIGINAL Readme.md

### Setup:

    npm install

    npm install -g rollup

### Bundle:

trigger rollup manually:

    rollup -c config/rollup.js

or automatically with guard-shell

    guard

(you need to `gem install guard-shell` before)


#### Setup for Bitcore-Lib

    npm i -g bower gulp browserify

    cd node_modules/bitcore-lib

    bower install
    npm install

    gulp browser


##### TODO:

- add grunt/whatchify other than guard
- add react router
