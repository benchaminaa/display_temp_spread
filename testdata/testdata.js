var test1data = [{ Month: 'January', maximum: '26.0*', minimum: '18.8' },
{ Month: 'February', maximum: '25.8', minimum: '18.8' },
{ Month: 'March', maximum: '24.8', minimum: '17.6' },
{ Month: 'April', maximum: '22.5', minimum: '14.7' },
{ Month: 'May', maximum: '19.5', minimum: '11.6' },
{ Month: 'June', maximum: '17.0', minimum: '9.3' },
{ Month: 'July', maximum: '16.4', minimum: '8.1' },
{ Month: 'August', maximum: '17.9', minimum: '9.0*' },
{ Month: 'September', maximum: '20.1', minimum: '11.1' },
{ Month: 'October', maximum: '22.2', minimum: '13.6' },
{ Month: 'November', maximum: '23.7', minimum: '15.7' },
{ Month: 'December', maximum: '25.2', minimum: '17.6' }];

var test2data = [{ "lowMonths": [{ "Month": "February", "maximum": "25.8", "minimum": "18.8", "spread": "7.0" }] }, { "originalData": [{ "Month": "January", "maximum": "26.0*", "minimum": "18.8", "spread": "7.2" }, { "Month": "February", "maximum": "25.8", "minimum": "18.8", "spread": "7.0" }, { "Month": "March", "maximum": "24.8", "minimum": "17.6", "spread": "7.2" }, { "Month": "April", "maximum": "22.5", "minimum": "14.7", "spread": "7.8" }, { "Month": "May", "maximum": "19.5", "minimum": "11.6", "spread": "7.9" }, { "Month": "June", "maximum": "17.0", "minimum": "9.3", "spread": "7.7" }, { "Month": "July", "maximum": "16.4", "minimum": "8.1", "spread": "8.3" }, { "Month": "August", "maximum": "17.9", "minimum": "9.0*", "spread": "8.9" }, { "Month": "September", "maximum": "20.1", "minimum": "11.1", "spread": "9.0" }, { "Month": "October", "maximum": "22.2", "minimum": "13.6", "spread": "8.6" }, { "Month": "November", "maximum": "23.7", "minimum": "15.7", "spread": "8.0" }, { "Month": "December", "maximum": "25.2", "minimum": "17.6", "spread": "7.6" }] }];

var test3data = [{ "lowMonths": [{ "Month": "February", "maximum": "25.8", "minimum": "18.8", "spread": "7.0" }, { "Month": "November", "maximum": "25.8", "minimum": "18.8", "spread": "7.0" }] }, { "originalData": [{ "Month": "January", "maximum": "26.0*", "minimum": "18.8", "spread": "7.2" }, { "Month": "February", "maximum": "25.8", "minimum": "18.8", "spread": "7.0" }, { "Month": "March", "maximum": "24.8", "minimum": "17.6", "spread": "7.2" }, { "Month": "April", "maximum": "22.5", "minimum": "14.7", "spread": "7.8" }, { "Month": "May", "maximum": "19.5", "minimum": "11.6", "spread": "7.9" }, { "Month": "June", "maximum": "17.0", "minimum": "9.3", "spread": "7.7" }, { "Month": "July", "maximum": "16.4", "minimum": "8.1", "spread": "8.3" }, { "Month": "August", "maximum": "17.9", "minimum": "9.0*", "spread": "8.9" }, { "Month": "September", "maximum": "20.1", "minimum": "11.1", "spread": "9.0" }, { "Month": "October", "maximum": "22.2", "minimum": "13.6", "spread": "8.6" }, { "Month": "November", "maximum": "25.8", "minimum": "18.8", "spread": "7.0" }, { "Month": "December", "maximum": "25.2", "minimum": "17.6", "spread": "7.6" }] }];

var test4data = [
    { Month: 'January', maximum: '26.0*', minimum: '18.8', spread: '7.2' },
    { Month: 'February', maximum: '25.8', minimum: '18.8', spread: '7.0' },
    { Month: 'March', maximum: '24.8', minimum: '17.6', spread: '7.2' },
    { Month: 'April', maximum: '22.5', minimum: '14.7', spread: '7.8' },
    { Month: 'May', maximum: '19.5', minimum: '11.6', spread: '7.9' },
    { Month: 'June', maximum: '17.0', minimum: '9.3', spread: '7.7' },
    { Month: 'July', maximum: '16.4', minimum: '8.1', spread: '8.3' },
    { Month: 'August', maximum: '17.9', minimum: '9.0*', spread: '8.9' },
    { Month: 'September', maximum: '20.1', minimum: '11.1', spread: '9.0' },
    { Month: 'October', maximum: '22.2', minimum: '13.6', spread: '8.6' },
    { Month: 'November', maximum: '23.7', minimum: '15.7', spread: '8.0' },
    { Month: 'December', maximum: '25.2', minimum: '17.6', spread: '7.6' }];

module.exports = {
    test1data,
    test2data,
    test3data,
    test4data
}

