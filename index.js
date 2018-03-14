#!/usr/bin/env node

// const program = require('commander');
// function range(val) {
//   return val.split('..').map(Number);
// }
 
// function list(val) {
//   return val.split(',');
// }
 
// function collect(val, memo) {
//   memo.push(val);
//   return memo;
// }
 
// function increaseVerbosity(v, total) {
//   return total + 1;
// }
 
// program
//   .version('1.0.6', '-v, --version')
//   .usage('[options] <file ...>')
//   .option('-i, --integer <n>', 'An integer argument', parseInt)
//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
//   .parse(process.argv);
 
// console.log(' int: %j', program.integer);
// // console.log(' float: %j', program.float);
// // console.log(' optional: %j', program.optional);
// // program.range = program.range || [];
// // console.log(' range: %j..%j', program.range[0], program.range[1]);
// // console.log(' list: %j', program.list);
// // console.log(' collect: %j', program.collect);
// // console.log(' verbosity: %j', program.verbose);
// // console.log(' args: %j', program.args);

// // program.args < 0 代表沒有任何輸入
// if (program.args.length == 0) {
//   program.outputHelp();  // 輸出說明
//   process.exit();        // 關閉程式
// }

const { makei18n, makei18nCSV } = require('./main.js');
makei18n({
  inputDir: './_locales',
  inputCSV:`${__dirname}/example.csv`, 
  inputFileName: 'messages.json', // messages.json
  outputFileName: 'messages.json', // messages.json
  // env: 'ChromeExtension',
});

// setTimeout(() => {
//   makei18nCSV({
//     inputDir: './_locales',
//     inputFileName: 'messages.json',
//     outputFile: 'test.csv',
//   });
// }, 2000);
