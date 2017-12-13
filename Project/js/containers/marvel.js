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
               description :  hero.description,
               image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
             }

          hero.urls.forEach((urlItem) => { 
          if(urlItem.type === 'detail') {
            object.link = urlItem.url
              }
           })


             array.push(object)
            })
            console.log(array)
            callback(array)

          })
        .fail(console.error)
        .done

      this.marvel.characters.findByName("captain america")
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description: hero.description,
               image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
             }
          hero.urls.forEach((urlItem) => { 
          if(urlItem.type === 'detail') {
             object.link = urlItem.url
              }
           })
             array.push(object)
            })
            console.log(array)
            callback(array)

          })
        .fail(console.error)
        .done

      this.marvel.characters.findByName("iron man")
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description: hero.description,
               image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
             }
          hero.urls.forEach((urlItem) => { 
          if(urlItem.type === 'detail') {
             object.link = urlItem.url
              }
           })

             array.push(object)
            })
            console.log(array)
            callback(array)

          })
        .fail(console.error)
        .done

       this.marvel.characters.findByName('spider-man')
        .then((heroes) => {
            heroes['data'].forEach((hero,index) => {
             object = {
               name: hero.name, 
               description: hero.description,
               image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
             }
         hero.urls.forEach((urlItem) => { 
          if(urlItem.type === 'detail') {
             object.link = urlItem.url
              }
           })

             array.push(object)
            })
            console.log(array)
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
}    

module.exports = Marvel
