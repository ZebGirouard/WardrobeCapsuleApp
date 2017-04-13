
var expect = require('chai').expect;
var request = require('request');

var URL = 'http://api.shopstyle.com/api/v2/products/455310119?pid=uid2561-39213081-27';

describe("shopstyle", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
		request(URL, function(error, response, body) {
			apiError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it("should return 200 - OK", function() {
		expect(apiResponse.statusCode).to.eq(200);
	});

	it("should have a name in the body", function() {
	  if (typeof(apiBody) == "string") {
	  	apiBody = JSON.parse(apiBody);
	  }
		expect(apiBody.name).to.not.be.empty;
	});
});
