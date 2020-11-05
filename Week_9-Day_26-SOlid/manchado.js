/* El manchado ------- esta en ingles
The Reading List
An object-oriented book-list!
Create a class BookList
Create another class called Book
BookLists should have the following properties:
Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
An array of all the Books
Each Book should have several properties:
Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object
Every Booklist should have a few methods:
.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful. */


class BookList {

    constructor() {
        
        this.booklist = [
            {
                title: 'Harry Potter',
                genre: 'Fantasy',
                author: 'J.K. Rowling',
                read: 'No',
                readDate: '',
            },
            {
                title: 'Game of Thrones',
                genre: 'Fantasy',
                author: 'R.R. Martin',
                read: 'No',
                readDate: '',
            },
            {
                title: 'Divina Comedia',
                genre: 'Poetry',
                author: 'Dante Alighieri',
                read: 'No',
                readDate: '',
            },
            {
                title: 'Don Quijote de la Mancha',
                genre: 'Novel',
                author: 'Miguel de Cervantes Saavedra',
                read: 'No',
                readDate: '',
            },
            {
                title: 'El amor en los tiempos del cólera',
                genre: 'Novel',
                author: 'Gabriel García Márquez',
                read: 'No',
                readDate: '',
            }
        ];
        this.readBooks = 0;
        this.notRead = 5;
        this.next = this.booklist[1];
        this.current = this.booklist[0];
        this.last = "";
    }

    add(book) {
        //should add a book to the books list.
        this.booklist.push(book);
        console.log(this.booklist);
    }

    finishCurrentBook() {
        /* should mark the book that is currently being read as "read"
        Give it a read date of new Date(Date.now())
        Change the last book read to be the book that just got finished
        Change the current book to be the next book to be read
        Change the next book to be read property to be the first unread book you find in the list of books*/
        var next;
        this.current.read = "Yes";
        this.current.readDate = new Date();
        this.last = this.current;
        this.current = this.next;
        this.current.read = 'Yes';
        for (var i = 0; i < this.booklist.length; i++) {
            if (this.booklist[i].read == 'No') {
                next = this.booklist[i];
                break;
            }
        }
        this.next = next;
        //console.log(this.booklist);
        //console.log(this.current);
        //console.log(this.next);
    }
}

class Book {

    constructor(title, genre, author, read, date) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = date;
    }

}

var harry2 = new Book("Harry Potter and the chamber of secrets", "Fantasy", "J.K. Rowling", "Yes", new Date());
var got2 = new Book("Game of Thrones: Song of Fire and Ice", "Fantasy", "R.R. Martin", "Yes", new Date(2020, 03, 12));
// const bookList = [harry, got];

var newBooklist = new BookList()
newBooklist.add(harry2);
newBooklist.finishCurrentBook();
