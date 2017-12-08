import Card from '../components/card'


export default class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from the marvel api

   }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#dddddd'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Marvel Dashboard')

    container.appendChild(title)

    let ironmanCard = new Card({
      title: 'Iron Man',
      image: '/images/ironman2.png',
      description: '',
      link: 'http://marvel.wikia.com/wiki/Anthony_Stark_(Earth-616)',
      linkText: 'More Info on Iron Man'
    })
    container.append(ironmanCard.getContent())

    let spidermanCard = new Card({
      title: 'Spider-Man',
      image: '/images/spiderman2.png',
      description: '',
      link: 'http://marvel.wikia.com/wiki/Peter_Parker_(Earth-616)',
      linkText: 'More Info on Spider-Man'
    })
    container.append(spidermanCard.getContent())


   let hulkCard = new Card({
      title: 'Wolverine',
      image: '/images/wolverine.png',
      description: '',
      link: 'http://marvel.wikia.com/wiki/James_Howlett_(Earth-616)',
      linkText: 'More Info on Wolverine'
    })
    container.append(hulkCard.getContent())

  let captainamericaCard = new Card({
      title: 'Captain America',
      image: '/images/captainamerica2.png',
      description: '',
      link: 'http://marvel.wikia.com/wiki/Steven_Rogers_(Earth-616)',
      linkText: 'More Info on Captain America'
    })
    container.append(captainamericaCard.getContent())



    return container
  }

  animate() {
  }
}
