let myLibrary = []

function Book(name, author, pages, read) {
	console.log('Constructer call')
	this.name = name
	this.author = author
	this.pages = pages
	this.read = read

	this.bookContainer = elementWithClass('div', 'book')
	this.topBookContainer = elementWithClass('div', 'book-top')
	this.bookTitle = elementWithClassAndContent('p', 'book-title', this.name)
	this.bookAuthor = elementWithClassAndContent('p', 'book-author', this.author)
	this.bottomBookContainer = elementWithClass('div', 'book-bottom')
	this.bookPages = elementWithClassAndContent(
		'p',
		'book-pages',
		`${this.pages} pages`
	)
	this.bookRead = imageElementWithHandler(this.read, () => this.toggleRead())

	this.bottomBookContainer.appendChild(this.bookPages)
	this.bottomBookContainer.appendChild(this.bookRead)

	this.topBookContainer.appendChild(this.bookTitle)
	this.topBookContainer.appendChild(this.bookAuthor)

	this.bookContainer.appendChild(this.topBookContainer)
	this.bookContainer.appendChild(this.bottomBookContainer)
}

Book.prototype.info = function () {
	return `${this.name} by ${this.author}, ${this.pages} pages, ${
		this.read ? 'already read' : 'not read yet'
	}`
}

Book.prototype.toggleRead = function () {
	this.read = !this.read
	this.bookRead.src = blackOrGreenFile(this.read)
}
Book.prototype.infoHtml = function () {
	return this.bookContainer
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read))
	console.log(myLibrary)
}

const elementWithClass = (el, cls) => {
	const element = document.createElement(el)
	element.classList.add(cls)
	return element
}

const elementWithClassAndContent = (el, cls, content) => {
	const element = elementWithClass(el, cls)
	element.innerText = content
	return element
}

const imageElementWithHandler = (val, handler) => {
	const img = elementWithClass('img', 'book-read')

	img.src = blackOrGreenFile(val)

	img.addEventListener('click', handler)

	return img
}

const blackOrGreenFile = (val) =>
	val
		? './assets/checkbox-marked-outline-green.svg'
		: './assets/checkbox-marked-outline.svg'
