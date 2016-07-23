var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  body: {
    type:String,
    required:true
  },
  image: {
    type:String,
  }
});

var Article = mongoose.model('Article', ArticleSchema);
console.log("Article Schema Loaded");
module.exports = Article;