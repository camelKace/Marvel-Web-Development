let express  = require('express')
let app = express() 
let path = require('path')

    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dom.html'));
})

app.listen('3000', () => {
  console.log('express is listening on port 3000')
})
