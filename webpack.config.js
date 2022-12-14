const path = require('path')

module.exports={
 entry:path.resolve(__dirname,'src','index.js'),
 output:{
  path:path.resolve(__dirname,'public'),
  filename:'bundle.js'
 },
 devServer:{
 
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true
},
 
 module:{
   rules:[
     {
       test:/\.js$/,
       exclude:/node_modules/,
       use:{
         loader:'babel-loader'
       }
     },
     {
      test:/.*\.(gif|png|jpe?g|jpg)$/i,
      use:[
       { loader:'file-loader'}
      ]
     },
     {
       test:/\.css$/,
       use:[
        
         {
           loader:'style-loader',
         },
         {
           loader:'css-loader'
         }
       ]
     }
   ]
 }
}