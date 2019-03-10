const csv = require("csvtojson");
const fs = require("fs");

/**
 * @param filepath absolute path to csv file
 * @return JSON object array with month, maximum and minimum mean teamperature properties
 */
module.exports.processCSVToJSON = async function(filepath) {
  return new Promise((resolve, reject) => {
    if (!filepath) {
      throw new Error("path to csv file is mandatory");
    }
    csv({
      noheader: true,
      headers: ["Month", "maximum", "minimum"]
    })
      .fromFile(filepath)
      .then(rawData => {
        months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        processedJson = [];
        for (item of rawData) {
          if (months.indexOf(item.Month) > -1) processedJson.push(item);
        }
        resolve(processedJson);
      })
      .catch(err => {
        reject(
          new Error(
            "Processing of csv to json was unsuccessful. Check file path"
          )
        );
      });
  });
};
/**
 * @param file absolute path to csv file
 * @return object containing both lowest temperature spread object array and yearly temperature spread array
 */
module.exports.getProccessedData = async function(file) {
  return new Promise((resolve, reject) => {
    this.processCSVToJSON(file)
      .then(json => {
        // console.log('before calculating spread',json);
        spread = this.calculateTempSpread(json);
        sortedSpread = JSON.parse(JSON.stringify(spread));
        // console.log('unsorted json', spread);
        sortedSpread.sort(function(a, b) {
          return a.spread - b.spread || a.Month.localeCompare(b.Month);
        });
        // console.log('sorted json', sortedSpread);
        lowMonths = this.getLowestMonths(sortedSpread);
        combined = [];
        combined.push({ lowMonths: lowMonths });
        combined.push({ originalData: spread });
        resolve(combined);
      })
      .catch(err => {
        console.log(err.message);
        reject(
          new Error("Failed to calculate temperature spread", err.message)
        );
      });
  });
};
/**
 * @param json object converted from csv to json as per method processCSVToJSON
 */
module.exports.calculateTempSpread = function(json) {
  for (let item in json) {
    const NUMERIC_REGEXP = /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g;
    let maxTemp = parseFloat(json[item].maximum.match(NUMERIC_REGEXP)[0]);
    let minTemp = parseFloat(json[item].minimum.match(NUMERIC_REGEXP)[0]);
    let tempSpread = maxTemp - minTemp;
    json[item].spread = tempSpread.toFixed(1);
  }
  return json;
};

module.exports.getLowestMonths = function(json) {
  let extractedData = [];
  extractedData.push(json[0]);
  // console.log('inside lowest months', extractedData);
  for (let i = 0; i < json.length - 1; i++) {
    for (let j = i + 1; j < json.length; j++) {
      if (parseFloat(json[j].spread) === parseFloat(json[i].spread)) {
        extractedData.push(json[j]);
      } else return extractedData;
    }
  }
  return extractedData;
};
