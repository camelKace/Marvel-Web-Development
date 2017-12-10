let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor() {
    this.marvel = api.createClient({
  publicKey: 'f420db779db075ac8f2852c66b5e9310',
  privateKey: '14b0e28b1acf42f3eec5989d99db82f6694f91db'
    })
    this.url = 'mongodb://localhost:27017/Marvel'
  }

  getData(callback) {
    let object = {}
    let array = []
      this.marvel.characters.findByName("wolverine")
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description :  hero.description
             }
             array.push(object)
            })
            callback(array)

          })
        .fail(console.error)
        .done

      this.marvel.characters.findByName("captain america")
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description :  hero.description
             }
             array.push(object)
            })
            callback(array)

          })
        .fail(console.error)
        .done

      this.marvel.characters.findByName("iron man")
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description :  hero.description
             }
             array.push(object)
            })
            callback(array)

          })
        .fail(console.error)
        .done

       this.marvel.characters.findByName('spider-man')
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description :  hero.description
             }
             array.push(object)
            })
            callback(array)

          })
        .fail(console.error)
        .done




    return array

      

  }

  insertDocuments(docs) {
    MongoClient.connect(this.url, (err,db) => {
      if(!err) {
        let collection = db.collection('testCollection')
        collection.insertMany(docs, (err,result) => {
          console.log(result)
        })
               db.close()
      }
      else {
       console.log(err) 
      }

    })
  }
  findDocuments() {  
     MongoClient.connect(this.url, (err, db) => {
      if (err) throw err
      let query = { names: "Wolverine"}
      db.collection('testCollection').find(query).toArray((err, result) => {
      if (err) throw err
        console.log(result)
          db.close()
  })
})    
}



  findDocuments() {  
     MongoClient.connect(this.url, (err, db) => {
      if (err) throw err
      let query = { names: "captain america"}
      db.collection('testCollection').find(query).toArray((err, result) => {
      if (err) throw err
          console.log(result)
            db.close()
  })
})    
}


  findDocuments() {  
     MongoClient.connect(this.url, (err, db) => {
      if (err) throw err
      let query = { names: "iron man"}
      db.collection('testCollection').find(query).toArray((err, result) => {
        if (err) throw err
          console.log(result)
            db.close()
  })
})    
}


  findDocuments() {  
     MongoClient.connect(this.url, (err, db) => {
      if (err) throw err
      let query = { names: "spider-man"}
      db.collection('testCollection').find(query).toArray((err, result) => {
      if (err) throw err
          console.log(result)
              db.close()
  })
})    
}
}

module.exports = Marvel
