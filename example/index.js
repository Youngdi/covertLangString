
const { makei18n, makei18nCSV } = require('makei18n');
const defaultI18nLanguageTransfer = () => {}; // your own logic transfer function
const defaultI18nKeyToCSV = () => {};

const run = async () => {
  await makei18n({
    inputCSV:`${__dirname}/example.csv`,
    // inputDir: './_locales', // optional 
    // inputFileName: 'messages.json', // messages.json
    // outputFileName: 'bbb.json', // messages.json
    // env: 'ChromeExtension', // optional 
    // i18nLanguageTransfer = defaultI18nLanguageTransfer,  // optional 
  });
  await makei18nCSV({
    inputDir: './_locales',
    // inputFileName: 'messages.json',
    // outputFileName: 'translation.csv',
    // i18nKeyToCSV = defaultI18nKeyToCSV, // optional 
    // i18nLanguageTransfer = defaultI18nLanguageTransfer, // optional 
  });
}
run();