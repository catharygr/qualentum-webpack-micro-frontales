// Para configurar la ruta de los archivos en el disco del servidor
const path = require("path");
// Para congigurar el html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Para separar el css en otro bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => ({
  // Documento de entrada
  entry: "./src/index.js",
  // Documento de salida
  output: {
    // Nombre del archivo de salida
    filename: "[name].bundle.js",
    // Ruta del archivo de salida
    path: path.resolve(__dirname, "dist"),
  },
  // Configurar webpack para que utlice modulos de tipo ES6
  experiments: {
    outputModule: true,
  },
  // Configurar el servidor de desarrollo
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  // Configuración de los source maps
  devtool: argv.mode === "development" ? "source-map" : false,
  module: {
    // Reglas de los módulos
    rules: [
      // Se pone la regla para los archivos js por defecto
      {
        test: /\.n?js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      // Se pone la regla para babel
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Se pone la regla para css
      {
        test: /\.css|s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          argv.mode === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      // Se pone la regla para las imagenes, fuentes, audios y videos
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3|wav|mp4|webm)$/,
        exclude: /node_modules/,
        type: "asset/resource",
        // Se configura assets y uso de las carpetas de assets
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      // Se pone la regla para los archivos html
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ["html-loader"],
      },
    ],
  },
  // Configuración de los plugins
  // Configuración de los plugins
  plugins: [
    // Se pone la configuración de html
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      scriptLoading: "module",
    }),
    // Se pone la configuración de css
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});
