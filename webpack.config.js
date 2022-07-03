const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require("fs");
console.log('文件路径',fs)
module.exports = {
  mode: "development",
  entry: "./test", //main.js中的.js可以省略，前面的./不能省
  plugins: [new HtmlWebpackPlugin()], //先不配置插件，看看效果 //不配置默认生成index.html
  output: {
    filename: "./test.js", // dist文件夹不存在时，会自动创建
  },
};
