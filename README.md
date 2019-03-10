# Welcome

Display temperature spread app will read sampler data provided in csv file 'sydney-temperatures.csv' inside '/testdata/sampler_location'  and displays lowest temperature spread month/s and display temperature spread for entire year. To test with a different data replace content of the file.

## Installation
1. Ensure to install node on the machine where module is extracted.
2. Install all required packages.
    from the root folder of module runn commmand `npm install`
	
## Execute unit tests
1. Follow installation steps above.
2. Following command is setup already with npm/package.json
    * `npm run test` - run unit tests

### Run

1. Follow installation steps above.
2. To test with a differnt test data, replace file 'sydney-temperatures.csv' inside '/testdata/sampler_location' directory.
3. Run `node .\app.js` to display temperature spread.
