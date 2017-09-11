var chai = require('chai'), chaiHttp = require('chai-http');
var expect = chai.expect;
var config = require('config');
var apiList = require('./api.js');

chai.use(chaiHttp);

var posts = function(callback) {
	chai.request(apiList.url)
		.get(apiList.posts)
		.end(function(err, res) {
			return callback(res);
		});
};

module.exports = {
	posts: posts
};