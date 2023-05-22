# Practice Movie Filter

A short practice application which can filter TOP-100 IMDB movie list

---

## Tasks

#### In Progress:

- Add "Getting started" block on `README.md` file
- Add responsive styles for tablet and mobile view

#### Backlog:

- Add to **Vercel** or any other "static page hosting" service
- Add **VueJS** and use `Ref()` for reactivity

---

## Change log

###### 2023-05-22

- Moved movies database from `src/api/movies.json` to `jsonkeeper.com` website
- Rework toggle function to `hide` and `show` instead of `toggle`
- Review functions › use one action inside the function
- Refactor the code, clear from duplicates and tech-trash
- Modified the command for DEV in `package.json` to have access to the website on different devices by network
- Cleared unused files and folders (images and fonts.pcss)

###### 2023-05-21

- Reworked `README.md` file and added the tasks which were made before the code review

###### 2023-05-19

- Imported Google fonts, added new font-family for **sans**, **serif** and **mono**
- Added favicon
- Fixed the issue when clearing the input or filling it with non-latin characters, console showed errors

###### 2023-05-16

- Added the project to GihHub

###### 2023-05-12

- Received new task for practice
- Show the code for review

###### 2023-05-11 — 2023-05-01

- Added the button **open modal** and **close** element to open and close the modal window using the mouse
- Added close icon and the function to clear the search input with autofocus on it
- Reworked display of the result, was included `year`, `rank` and `rating`
- Added `year`, `rank` and `rating` to movies database
- Added the function to render the movies inside the `datalist` tag
- Added TOP100 movies from IMDB website to movies database
- Added a keyboard shortcut `Ctrl + Shift + Z` to toggle and `Escape` to close the modal window
- Added modal layout and styles with autofocus on input
- Added layout and styles for main page
