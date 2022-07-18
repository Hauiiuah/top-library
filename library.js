let myLibrary = []

function Book(name, author, pages, read) {
	this.name = name
	this.author = author
	this.pages = pages
	this.read = read
}

Book.prototype.info = function () {
	return `${this.name} by ${this.author}, ${this.pages} pages, ${
		this.read ? 'already read' : 'not read yet'
	}`
}

function addBookToLibrary() {
	console.log('Hello from Library')
}
