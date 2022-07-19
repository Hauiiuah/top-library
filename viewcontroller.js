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
		!title ? bookTitleInput.focus() : bookAuthorInput.focus()
		return
	}
	// Save Values
	addBookToLibrary(title, author, pages, read)
	populateBookshelf()
	// Clear Values
	bookTitleInput.value = ''
	bookAuthorInput.value = ''
	bookPagesInput.value = ''
	bookReadInput.checked = false
})

const addBookToLibrary = (title, author, pages, read) => {
	myLibrary.push(new Book(title, author, pages, read))
	console.log(myLibrary)
}

const removeBookFromLibrary = (book) => {
	if (!confirm(`Delete ${book.name} from library?`)) {
		return
	}
	myLibrary.splice(book.index, 1)
	console.log(`Removed at Index ${book.index}`)
	populateBookshelf()
}

const populateBookshelf = () => {
	bookShelf.innerHTML = ''
	myLibrary.forEach((book, index) => {
		book.setDeleteCallBack(removeBookFromLibrary)
		bookShelf.appendChild(book.infoHtml(index))
	})
}
const addSampleData = () => {
	addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 236, false)
	addBookToLibrary('Alice in Wonderland', 'Lewis Caroll', 431, true)
	addBookToLibrary('Harry Potter 1', 'J.K. Rowling', 354, false)
	addBookToLibrary('Harry Potter 2', 'J.K. Rowling', 624, true)
	addBookToLibrary('Harry Potter 3', 'J.K. Rowling', 517, false)
}

addSampleData()
populateBookshelf()
