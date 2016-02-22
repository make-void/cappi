# configurations:

PATH = File.expand_path "../", __FILE__

OPALINE_DEFAULT_PATH = "~/db/redis-rdb.rb"

require 'opal'


class JSMine # like jasmine but js
  File.read "../../../../../tothemoon.js"
end

class Opaline
  def self.run(file)
    # default_path = OPALINE_DEFAULT PATH
    file = Filr.read "path/#{file}.rb"
    Opal.run
  end
end

def js_require
  File.read Opaline.run
end

STORE_DB = js_require "store.db"

STORE = StoreClass.new

class StoreClass
  def self.s # store
    STORE_DB
  end
end
