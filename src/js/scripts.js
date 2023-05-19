// =============================================
// Get movies and show them in console.log -OR- Error
// =============================================
async function getMovies() {
   let url = '/src/api/movies.json';
   try {
      let res = await fetch(url);
      return await res.json();
   } catch (error) {
      console.log(error);
   }
}


// =============================================
// Add movies to datalist option
// =============================================
const renderMovieOptionList = async () => {
   const dataListOption = document.getElementById('top-100-movies')
   let movies = await getMovies();
   movies.forEach(item => {
      let option = document.createElement('option');
      option.innerHTML = item.title;
      dataListOption.appendChild(option);
   });

}
renderMovieOptionList()


// =============================================
// Show movies result under datalist option
// =============================================
// const showResult = (id, title, year, rating) => {
//    const modalResult = document.querySelector('.modal__result')
//    console.log(`%c#${id}`, 'color: #453643; border-radius:4px; background: #E3E3E3; padding: 4px 8px;', title + " (" + year + ")" + " / ⭐️️ Rating: " + rating + "/10");
//    modalResult.innerHTML = `
//       <div class="flex items-start gap-5">
//          <div class="bg-purple/25 rounded px-2">#${id}</div>
//          <div class="font-bold">${title} <span class="font-normal text-xs text-black/50 ml-2">(${year})</span></div>
//          <div class="flex shrink text-purple font-bold ml-auto">${rating}<span class="w-max text-black/50 font-normal ml-1">/ 100</span></div>
//       </div>
//    `
// }

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
         console.log(`%cResult:`, 'color: #453643; border-radius:4px; background: #E3E3E3; padding: 4px 8px;', item);
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
const clearInput = () => {
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

function toggleModal() {
   modal.classList.toggle('hidden')
   modalOverlay.classList.toggle('hidden')
   modalInput.focus()
}

clickBtn.addEventListener('click', toggleModal)
modalCloseBtn.addEventListener('click', toggleModal)


// =============================================
// Toggle modal on keyboard Shortcuts
// =============================================
document.onkeyup = function (e) {
   if (e.ctrlKey && e.shiftKey && e.code === 'KeyZ') {
      toggleModal()
      console.log(`%cCtrl + Shift + Z`, 'color: #000000; border-radius:4px; background: #F3DE2C; padding: 4px 8px;', "was pressed");
   } else if (e.code === 'Escape') {
      // @todo hide modal function
      modal.classList.add('hidden')
      modalOverlay.classList.add('hidden')
      console.log(`%cESC`, 'color: #FFFFFF; background: #E53D00; border-radius:4px; padding: 4px 8px;', "button was pressed");
   }
};

// TODO: Render function renders once all
// TODO: Install Vue and try vue reactivity

// =============================================
// Movie selection from datalist › option
// =============================================
const inputField = document.querySelector('input[list="top-100-movies"]')
inputField.addEventListener('input', onInput);

function onInput(e) {
   const input = e.target;
   const value = input.value;
   const list = input.getAttribute('list');
   // const options = [...document.getElementById(list).childNodes];
   // The list of all options getting from datalist

   const result = movies.find((movie) => {
      return movie.title === value
   })

   renderMovies([result])

   // for(let i = 0; i < options.length; i++) {
   //    if(options[i].innerText === value) {
   //       console.log(`%cInput result:`, 'color: #000000; border-radius:4px; background: #F3DE2C; padding: 4px 8px;', value);
   //       renderMovies(value)
   //       break;
   //    } else if (value === '') {
   //       console.log(`%cResult:`, 'color: #FFFFFF; border-radius:4px; background: #E53D00; padding: 4px 8px;', 'Clear');
   //       break;
   //    }
   // }
}
