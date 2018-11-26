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

//show alert  
UI.prototype.showAlert = function(message, className) {
    //create div , construct element
    const div = document.createElement('div');
    div.className = `alert ${className}`;

    //add text
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    //timeout after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000)
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

    //validate (whether the input fields are not empty)
    if (title === '' || author === '' || isbn === '') {
        //error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        //add  book to list 
        ui.addBookToList(book);

        //clear form fields after entering submit
        ui.clearFields();

    }

    e.preventDefault();
})