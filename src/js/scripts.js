// =============================================
// Get movies
// =============================================
async function getMovies() {
   let url = 'https://api.npoint.io/b79ceb4cd68e85d5eea7'
   try {
      let res = await fetch(url)
      console.log(`%cOK`, 'color: #000000; border-radius:4px; background: #7CB518; padding: 4px 8px;', 'Movie list has been connected')
      return await res.json()
   } catch (error) {
      console.log(`%cERROR`, 'color: #FFFFFF; border-radius:4px; background: #E53D00; padding: 4px 8px;', error)
   }
}

// =============================================
// Add movies to datalist option
// =============================================
async function renderMovieOptionList() {
   const dataListOption = document.getElementById('top-100-movies')
   let movies = await getMovies()
   movies.forEach(item => {
      let option = document.createElement('option');
      option.innerHTML = item.title
      dataListOption.appendChild(option)
   })
}
renderMovieOptionList()

// =============================================
// Render movie list
// =============================================
let movies = []

getMovies().then((result) => {
   movies = result
})

function renderMovies(movies) {
   let result = ''

   const modalResult = document.querySelector('.modal__result')
   movies.forEach(item => {
      if(!item) {

      } else {
         console.log(`%cResult:`, 'color: #453643; border-radius:4px; background: #E3E3E3; padding: 4px 8px;', item)
         const {id, title, year, rating} = item

         result += `
         <div class="flex items-start gap-5">
            <div class="bg-purple/25 rounded px-2">#${id}</div>
            <div class="font-bold">${title} <span class="font-normal text-xs text-black/50 ml-2">(${year})</span></div>
            <div class="flex shrink text-purple font-bold ml-auto">${rating}<span class="w-max text-black/50 font-normal ml-1">/ 100</span></div>
         </div>
      `
      }
   });
   modalResult.innerHTML = result
}

// =============================================
// Clear input
// =============================================
const modalLabel = document.querySelector('.modal__search-movie')
const modalInput = document.querySelector('.modal__input')
const btnClear = document.createElement('div')
modalLabel.appendChild(btnClear)
btnClear.classList.add('modal__clear')
btnClear.innerHTML = '❌'
function clearInput() {
   modalInput.value = ''
   modalInput.focus()
}
btnClear.addEventListener('click', clearInput)

// =============================================
// Toggle modal on click
// =============================================
const clickBtn = document.getElementById('click-btn')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal__overlay')
const modalCloseBtn = document.querySelector('.modal__close')

function showModal() {
   modal.classList.remove('hidden')
   modalOverlay.classList.remove('hidden')
   modalInput.focus()
}

function hideModal() {
   modal.classList.add('hidden')
   modalOverlay.classList.add('hidden')
}

function checkModalStatus() {
   const status = modal.classList.contains('hidden')
   status ? showModal() : hideModal()
}

clickBtn.addEventListener('click', checkModalStatus)
modalCloseBtn.addEventListener('click', checkModalStatus)
modalOverlay.addEventListener('click', hideModal)

// =============================================
// Toggle modal on keyboard shortcuts
// =============================================
document.onkeyup = function (e) {
   if (e.ctrlKey && e.shiftKey && e.code === 'KeyZ') {
      checkModalStatus()
   } else if (e.code === 'Escape') {
      hideModal()
   }
}

// =============================================
// Render the result on picking it on input
// =============================================
const inputField = document.querySelector('input[list="top-100-movies"]')
function onInput(e) {
   const input = e.target
   const value = input.value
   const result = movies.find((movie) => {
      return movie.title === value
   })
   renderMovies([result])
}
inputField.addEventListener('input', onInput)
