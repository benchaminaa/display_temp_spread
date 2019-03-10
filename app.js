var helper = require('./lib/helper');
var colours = require('colors');

async function main() {
    // TODO can be improved to read files from sampler folder instead of limiting to use file name to supply
    helper.getProccessedData(`${process.cwd()}//testdata//sampler_location//sydney-temperatures.csv`)
        .then((processdData) => {
            console.log(colours.cyan('| %s |'), '================================');
            console.log(colours.yellow('| %s |'), 'Lowest temperature spread month');
            console.log(colours.cyan('| %s |'), '================================');
            console.log(colours.magenta('| %s | %s |'), 'Month', 'Spread');
            for (item of processdData[0].lowMonths) {
                console.log('| %s | %s |', item.Month, item.spread);
            }
            console.log(colours.cyan('| %s |'), '============================================');
            console.log(colours.yellow('| %s |'), '               Temperature spread           ');
            console.log(colours.cyan('| %s |'), '============================================');
            console.log(colours.magenta('| %s | %s | %s | %s |'), 'Month', 'Mean Maximum', 'Mean Minimum', 'Spread');
            for (item of processdData[1].originalData) {
                console.log('| %s | %s | %s | %s |', item.Month, item.maximum, item.minimum, item.spread);
            }
            console.log('| %s |', colours.cyan('============================================'));
        })
        .catch((err) => console.log(err.message));
}

main().catch(reason => {
    throw reason;
});
