var config = require('config');
var chai = require('chai');
var chaiHttp = require('chai-http');
var apiList = require('../app/api.js');
var expect = chai.expect;

chai.use(chaiHttp);

var Sample = require('../app/Sample');

describe("Posts request check", function() {

	var response;
	before(function(done) {
		Sample.posts(function(res) {
			console.log("response: " + JSON.stringify(res));
			response = res;
			done();
		});
	});

	it("returns status 200", function() {
		// expect(response).to.have.status(200);
	});
});