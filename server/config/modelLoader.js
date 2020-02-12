const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
let mydb = "sample"










mongoose.connect(`mongodb+srv://test:test@cluster0-8iaml.mongodb.net/${mydb}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology:true});

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
   }
})