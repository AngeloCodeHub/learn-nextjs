import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import CopyPlugin from 'copy-webpack-plugin';
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        { from: "src/assets", to: "assets" },
        { from: "src/outerwebpack.js", to: "outerwebpack.js" }
      ],
    }),
  ],
  devServer: {
    static: { directory: join(__dirname, 'dist') },
    watchFiles: ["src/**/*"],
    port: 3000
  },

}
export default config;
