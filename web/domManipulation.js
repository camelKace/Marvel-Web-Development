let paragraph = document.createElement('p')
paragraph.innerHTML =  'This was made from JS'
let header = document.createElement('h1')
header.innerHTML = 'This is my header'
let body = document.getElementById('content')
let head = document.getElementById('content2')
body.append(paragraph)
body.append(header)
