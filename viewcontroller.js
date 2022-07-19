const bookShelf = document.getElementById('bookshelf')
const formToggleButton = document.getElementById('formtogglebutton')
const addForm = document.getElementById('addform')
const saveButton = document.getElementById('savebutton')
const bookTitleInput = document.getElementById('book-title')
const bookAuthorInput = document.getElementById('book-author')
const bookPagesInput = document.getElementById('book-pages')
const bookReadInput = document.getElementById('book-read')

formToggleButton.addEventListener('click', () => {
	addForm.classList.toggle('visible')

	if (addForm.classList.contains('visible')) {
		formToggleButton.innerText = 'Hide Form'
	} else {
		formToggleButton.innerText = 'Add Book'
	}
})

saveButton.addEventListener('click', () => {
	// Fetch Values

	const title = bookTitleInput.value
	const author = bookAuthorInput.value
	const pages = bookPagesInput.value || 0
	const read = bookReadInput.checked

	if (!title || !author) {
		console.log('Missing INput')
		return
	}
	// Save Values
	// console.log(`Title: ${title}, Author ${author}, Pages ${pages}, Read ${read}`)
	addBookToLibrary(title, author, pages, read)
	populateBookshelf()
	// Clear Values
	bookTitleInput.value = ''
	bookAuthorInput.value = ''
	bookPagesInput.value = ''
	bookReadInput.checked = false
})

// Populate Bookshelf

const populateBookshelf = () => {
	bookShelf.innerHTML = ''
	myLibrary.forEach((book) => {
		bookShelf.appendChild(book.infoHtml())
	})
}
const addSampleData = () => {
	addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 236, false)
	addBookToLibrary('Alice in Wonderland', 'Lewis Caroll', 431, true)
}

addSampleData()
populateBookshelf()
