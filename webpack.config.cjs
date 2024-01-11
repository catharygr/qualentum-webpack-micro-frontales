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
    ],
  },
});
