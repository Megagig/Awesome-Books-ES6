addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  export default addBook;