const program = require('commander');

const helpOptions = () => {
  program.option('-w --why', 'a melrose option');

  program.option('-s --src <src>', 'a source folder');
  program.option(
    '-d --dest <dest>',
    'a destination folder, 例如: -d src/pages, 错误/src/pages'
  );
  program.option('-f --framework <framework>', 'your framework name');

  program.on('--help', function () {
    console.log('');
    console.log('usage');
    console.log('   melrose -v');
    console.log('   melrose -version');
  });
};

module.exports = helpOptions;
