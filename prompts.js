const localeList = require('./lang.js')

module.exports = [
  {
    type: 'list',
    name: 'import',
    message: 'How do you want to import Element?',
    choices: [
      { name: 'Fully import', value: 'full' },
      { name: 'Import on demand', value: 'partial' }
    ],
    default: 'full',
  },
  {
    when: answers => answers.import === 'full',
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to overwrite Element\'s SCSS variables?',
    default: false,
  },
  {
    type: 'list',
    name: 'lang',
    message: 'Choose the locale you want to load',
    choices: localeList.map(locale => ({
      name: locale,
      value: locale
    })),
    default: 'zh-CN'
  }
]
