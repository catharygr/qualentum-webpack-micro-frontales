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
});
