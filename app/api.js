var config = require('config');

var host = config.get('server.host');
var url = host;

// list of API available
var posts = "/posts";
var comments = "/comments";
var albums = "/albums";
var photos = "/photos";
var todos = "/todos";
var users = "/users";

module.exports = {
	url: url,
	posts: posts,
	comments: comments,
	albums: albums,
	photos: photos,
	todos: todos,
	users: users
}