const posterImage = document.querySelectorAll('.loadlate')
const allTextContent = document.querySelectorAll('.lister-item-content')
const allItemsHeader = document.querySelectorAll('.lister-item-header')
const allGenre = document.querySelectorAll('.genre')
const allRuntime = document.querySelectorAll('.runtime')
const allRanking = document.querySelectorAll('.ratings-imdb-rating')
const allDirsStars = Array.from(document.getElementsByTagName('p'))
const allRevenueData = Array.from(document.querySelectorAll('.sort-num_votes-visible'))

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const ranksArr = []
allItemsHeader.forEach(item => {
   ranksArr.push(item.children[0].innerHTML)
})
let ranks = []
Object.entries(ranksArr).forEach((rank, i) => {
   ranks[i] = ranksArr[i].replace('.','')
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const titlesArr = []
allItemsHeader.forEach(title => {
   titlesArr.push(title.children[1].innerText)
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const descriptionArr = []
allTextContent.forEach(desc => {
   descriptionArr.push(desc.children[3].innerText)
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dbYears = {}
allItemsHeader.forEach((item, i) => {
   dbYears[i] = item.children[2].innerHTML
})
let years = {}
Object.entries(dbYears).forEach((item, i) => {
   years[i] = dbYears[i].replace(/[(I)]/g, '')
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
let genres = {}
   allGenre.forEach((genre, i) => {
   genres[i] = genre.innerText
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dbRuntime = {}
allRuntime.forEach((item , i) => {
   dbRuntime[i] = item.innerText
})
const runtime = {}
Object.entries(dbRuntime).forEach((time, i) => {
   runtime[i] = dbRuntime[i].replace(' min','')
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
let ranking = {}
allRanking.forEach((item , i) => {
   ranking[i] = item.children[1].innerHTML
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dbDirsStars = {}
const directors = {}
const stars = {}
allDirsStars.forEach((item, i) => {
   if (item.innerText.indexOf("Director:") > -1) {
      dbDirsStars[i] = item.innerText
   } else if (item.innerText.indexOf("Directors:") > -1) {
      dbDirsStars[i] = item.innerText
   }
})

Object.entries(dbDirsStars).forEach((persons, i) => {
   const [director, star] = Object.values(dbDirsStars)[i].split(' | ')
   const newDirector = director.replace(/Director: |Directors: /g,'')
   const newStars = star.replace(/Stars: /g,'')
   directors[i] = newDirector
   stars[i] = newStars
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const gross = {}
allRevenueData.forEach((item, i) => {
   if(!item.innerText.includes('$')){
      gross[i] = 'n/a'
   } else {
      const subitem = item.children
      for(let j = 0; j < subitem.length; j++){
         if(subitem[j].innerText.indexOf("$") > -1) {
            gross[i] = subitem[j].innerText
         }
      }
   }
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const postersArr = []
posterImage.forEach((poster, i) => {
   postersArr.push(poster[i] = poster.src)
})

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
let moviesDB = []
for(let i = 0; i < 1000; i++){
   movies = {
      rank: ranksArr[i].replace('.',''),
      title: titlesArr[i],
      description: descriptionArr[i],
      year: years[i],
      genre: genres[i],
      runtime: runtime[i],
      rating: ranking[i],
      director: directors[i],
      stars: stars[i],
      gross: gross[i],
      poster: postersArr[i]
   }
   moviesDB.push(movies)
}
console.log(`%cmoviesDB [${moviesDB.length}]:`, 'color: #000000; border-radius:4px; background: #F3DE2C; padding: 4px 8px;', moviesDB);
console.log(`%cResult:`, 'color: #453643; border-radius:4px; background: #E3E3E3; padding: 4px 8px;', JSON.stringify(moviesDB));
