//Book Constructor 
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//UI  constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create tr  element
    const row = document.createElement('tr');
    //console.log(row);
    //insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `; //last td is the icon 
    list.appendChild(row); // appending the td to tr and then to tbody
}

//clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//event listeners 
document.getElementById('book-form').addEventListener('submit', function(e) {
    //get form values 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //instantiate book object 
    const book = new Book(title, author, isbn);

    //instantiate ui  object  
    const ui = new UI();

    //add  book to list 
    ui.addBookToList(book);

    //clear form fields after entering submit
    ui.clearFields();




    e.preventDefault();
})