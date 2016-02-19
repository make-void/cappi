# Usage:
#
#     guard
#
#
# this will execute rollup to recompile your js app bundle
#

coffee = "coffee -cb ."
rollup = "rollup -c config/rollup.js"

guard :shell do
  watch(%r{^src/.+\.coffee$}) { |m| `#{coffee} && #{rollup}` }
  watch(%r{^src/.+\.js$}) { |m| `#{rollup}` }
end

guard :livereload do
  watch(%r{^dist/bundle\.js$})
end

# coffeescript_options = {
#   input:  'src/api',
#   output: 'src/api',
#   patterns: [ %r{^src/.+\.coffee$} ],
#   bare: true
# }
#
# guard 'coffeescript', coffeescript_options do
#   coffeescript_options[:patterns].each { |pattern| watch(pattern) }
# end
