var chai = require('chai'), chaiHttp = require('chai-http');
var expect = chai.expect;
var config = require('config');
var apiList = require('./api.js');

chai.use(chaiHttp);

var get = function(userId, callback) {
	chai.request(apiList.url)
		.get(apiList.users + userId)
		.end(function(err, res) {
			return callback(res);
		});
};

module.exports = {
	get: get
};