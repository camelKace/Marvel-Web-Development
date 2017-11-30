let program = require('commander');
let Marvel = require('./marvel')

program
  .command('avengers')
  .action(() => {
    console.log('avengers')
      let marvel = new Marvel()
      marvel.getAvengers()
  })

program
  .command('thor')
  .action(() => {
    console.log('thor')
      let marvel = new Marvel()
      marvel.getThor()
  })


program.parse(process.argv)
  
if(!program.args.length) {
  program.help()
} 
