var chai = require('chai'),
    chaiHttp = require('chai-http');
var expect = chai.expect;
var config = require('config');
var apiList = require('./api.js');

chai.use(chaiHttp);

var get = function(userId, callback) {
    chai.request(apiList.url)
        .get(apiList.posts)
        .query({ userId: userId })
        .end(function(err, res) {
            return callback(res);
        });
};

var post = function(userId, callback) {
    chai.request(apiList.url)
        .post(apiList.posts)
        .send(userId)
        .end(function(err, res) {
            return callback(res);
        });
};

module.exports = {
    get: get,
    post: post
};