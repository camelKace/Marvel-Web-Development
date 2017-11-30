let api = require('marvel-api') 

let marvel = api.createClient({
  publicKey:'f420db779db075ac8f2852c66b5e9310',
  privateKey:'14b0e28b1acf42f3eec5989d99db82f6694f91db'
})

class Marvel {
 constructer(){

 } 

    getAvengers() {
     marvel.characters.findAll(50)
      .then((data) => {
        console.log(JSON.stringify(data, null, 2))
    })
     .fail(console.error)
     .done();    
  }

      getThor() {
       marvel.characters.findByName("thor")
      .then((data) => {
        console.log(JSON.stringify(data, null, 2))
    })
     .fail(console.error)
     .done();    
  }
}

module.exports = Marvel
