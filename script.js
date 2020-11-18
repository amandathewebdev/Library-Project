let booklist = document.querySelector('.library');
let form = document.querySelector('form');

let myLibrary = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    getUserInput();
    form.reset();
});

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function getUserInput(title, author, pages, read) {
	title = document.querySelector('#title').value;
	author = document.querySelector('#author').value;
	pages = document.querySelector('#pages').value;
	read = document.querySelector('#read').value;
	addBookToLibrary(title, author, pages, read);
}

function addBookToLibrary(title, author, pages, read) {
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	createNewBookCard(newBook);
}

function createNewBookCard(newBook) {
	let div = document.createElement('div');
  	div.classList.add('book');
  	booklist.appendChild(div);

  	let h3 = document.createElement('h3');
  	div.appendChild(h3);
  	h3.textContent = newBook.title;

  	let h4 = document.createElement('h4');
  	div.appendChild(h4);
    h4.textContent = 'by ' + newBook.author;

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = 'Pages: ' + newBook.pages;

    let readBtn = document.createElement('button');
    div.appendChild(readBtn);
    readBtn.textContent = 'Read: ' + newBook.read + ' ▾';
    readBtn.classList.add('read-btn');
    readBtn.addEventListener('click', updateReadStatus);

    let deleteBtn = document.createElement('button');
    div.appendChild(deleteBtn);
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('remove-btn');
    deleteBtn.addEventListener('click', removeBook);
}

function removeBook() {
	this.parentNode.remove();
}

function updateReadStatus(e) {
	let readUpdate = window.prompt('Have you read this book? Y/N');
	e.target.textContent = 'Read: ' + readUpdate + ' ▾';
}

addBookToLibrary('The Left Hand of Darkness', 'Ursula Le Guin', '331', 'Have Read');