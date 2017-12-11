let Marvel = require('./marvel')

let marvel = new Marvel()

marvel.getData((array) => {
  marvel.insertDocuments(array)
})
