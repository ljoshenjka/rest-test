var config = require('config');
var chai = require('chai');
var validator = require('validator');
var chaiHttp = require('chai-http');
var apiList = require('../app/api/api.js');
var expect = chai.expect;

chai.use(chaiHttp);

var posts = require('../app/api/posts');
var users = require('../app/api/users');
var helpers = require('../app/helpers');
var postsData = require('../data/postsData');

var userId;

describe("Get a random user (userID)", function() {
    userId = helpers.getRandomInt(1, 10);
    var response;
    var resBody;
    before(function(done) {
        users.get(userId, function(res) {
            response = res;
            resBody = JSON.parse(response.text);
            done();
        });
    });

    it("print its address to output", function() {
        console.log("response: " + JSON.stringify(resBody, null, "    "));
    });

    it("verify email format is correct", function() {
        // console.log("email: " + resBody.email);
        expect(validator.isEmail(resBody.email)).to.be.true;
    });
});

describe("Using userID Get their associated posts", function() {

    var response;
    var resBody;
    before(function(done) {
        posts.get(userId, function(res) {
            response = res;
            resBody = JSON.parse(response.text);
            done();
        });
    });

    it("verify they contains a valid id, title and body", function() {
        // console.log("response: " + JSON.stringify(resBody, null, "    "));
        resBody.forEach(function(instance) {
            expect(instance.id).to.be.an("number");
            expect(instance.title).to.be.an("string");
            expect(instance.body).to.be.an("string");
        });
    });

});

describe("Do a post using same userID with a valid title and body", function() {

    var response;
    var resBody;
    postsData.POST_1.userId = userId;
    before(function(done) {
        posts.post(postsData.POST_1, function(res) {
            response = res;
            resBody = JSON.parse(response.text);
            done();
        });
    });

    it("verify that post is created", function() {
        // console.log("response: " + JSON.stringify(resBody, null, "    "));
        expect(resBody.title).to.equal(postsData.POST_1.title);
        expect(resBody.body).to.equal(postsData.POST_1.body)
    });

});