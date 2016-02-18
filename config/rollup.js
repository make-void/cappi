import babel   from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import coffeescript from 'rollup-plugin-coffee-script';


export default {
  entry: 'src/app.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    coffeescript(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({

      extensions: ['.js', '.coffee']
    })
  ]
}
