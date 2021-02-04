// test/server.js

var expect  = require("chai").expect;
var request = require("request");

describe("Color Code Converter API", () => {
  describe("RGB to Hex conversion", () => {
    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", (done) => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", (done) => {
      request(url, (error, response, body) => {
        expect(body).to.equal("ffffff");
        done();
      });
    });

  });

  describe("Hex to RGB conversion", () => {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", (done) => {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", (done) => {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });
});
