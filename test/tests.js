var helper = require('../lib/helper');
var chai = require("chai");
var expect = chai.expect;
var fs = require('fs');
var testdata = require('../testdata/testdata');

describe("Tests to validate helper methods", () => {
    it("test loading of csv file to json", () => {
        return new Promise(function (resolve) {
            helper.processCSVToJSON(`${process.cwd()}//testdata//sydney-temperatures.csv`).then((json) => {
                actual = JSON.stringify(json);
                expected = JSON.stringify(testdata.test1data)
                expect(actual).to.equal(expected);
                resolve();
            })
        });
    });

    it("test minimum spread month with one month in lowest spread", () => {
        return new Promise(function (resolve) {
            helper.getProccessedData(`${process.cwd()}//testdata//sydney-temperatures.csv`)
                .then((json) => {
                    actual = JSON.stringify(json);
                    expected = JSON.stringify(testdata.test2data)
                    expect(actual).to.equal(expected);
                    // expect(json).to.eql(testdata.test2data);
                    resolve();
                });

        });
    });

    it("test minimum spread month with two months in lowest spread", () => {
        return new Promise(function (resolve) {
            helper.getProccessedData(`${process.cwd()}//testdata//sydney-temperatures_two_lowest_months.csv`)
                .then((json) => {
                    actual = JSON.stringify(json);
                    expected = JSON.stringify(testdata.test3data);
                    expect(actual).to.equal(expected);
                    resolve();
                });
        });
    });

    it('test calculate spread for one lowest', () => {
        jsonObject = JSON.parse(fs.readFileSync(`${process.cwd()}//testdata//temperatures.json`, 'utf8'));
        expect(helper.calculateTempSpread(jsonObject)).to.eql(testdata.test4data);
    });
});
