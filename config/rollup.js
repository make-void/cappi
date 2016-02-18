import babel   from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/app.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel()
  ]
}
