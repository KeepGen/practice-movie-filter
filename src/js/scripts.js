// =============================================
// Get movies
// =============================================
async function getMovies() {
   let url = 'https://api.npoint.io/ac67b54c9cc188cc0232'
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
   const dataListOption = document.getElementById('top-1000-movies')
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
         const {rank, title, description, year, rating, genre, runtime, gross, director, stars, poster} = item

         result += `
         <!--
         <div class="flex items-start gap-5">
            <div class="bg-purple/25 rounded px-2">#${rank}</div>
            <div class="font-bold">${title} <span class="font-normal text-xs text-black/50 ml-2">(${year})</span></div>
            <div class="flex shrink text-purple font-bold ml-auto">${rating}<span class="w-max text-black/50 font-normal ml-1">/ 10</span></div>
         </div>
         -->

         <div class="flex flex-col items-center gap-3">
            <div class="w-full flex flex-col tablet:flex-row gap-2">
               <img src="${poster}" alt="${title}"
                  class="w-32 h-auto flex flex-shrink-0 rounded mx-auto tablet:ml-0"
               >

               <div class="w-full flex flex-col">
                  <div class="w-full flex flex-wrap items-end gap-x-2 pb-1 mt-2 tablet:mt-0">
                     <div class="font-bold">${title}</div>
                     <span class="font-normal text-xs text-black/75 mb-0.5">(${year})</span>
                  </div>

                  <div class="w-full flex items-center justify-between border-y border-y-grey-dark/10 p-1">
                     <div class="font-bold text-sm py-1.5">Rank: <span class="w-fit text-sm text-black bg-purple/25 rounded py-1.5 px-2">#${rank}</span></div>
                     <div class="flex text-sm text-purple font-bold">${rating} <span class="text-black/50 ml-1">/ 10</span></div>
                  </div>

                  <div class="flex flex-col font-bold text-xs mt-1 p-0.5">
                     <div class="text-black/75 font-normal">${description}</div>
                  </div>
               </div>
            </div>

            <div class="w-full flex flex-col self-start justify-between text-xs">
               <div class="font-bold">Runtime: <span class="font-normal">${runtime} min</span></div>
               <div class="font-bold">Genre: <span class="font-normal">${genre}</span></div>
               <div class="font-bold">Gross: <span class="font-normal">${gross}</span></div>
            </div>

            <div class="w-full flex flex-col gap-1 text-xs">
               <div class="font-bold">Director: <span class="font-normal">${director}</span></div>
               <div class="font-bold">Stars: <span class="font-normal">${stars}</span></div>
            </div>
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
const inputField = document.querySelector('input[list="top-1000-movies"]')
function onInput(e) {
   const input = e.target
   const value = input.value
   const result = movies.find((movie) => {
      return movie.title === value
   })
   renderMovies([result])
}
inputField.addEventListener('input', onInput)
