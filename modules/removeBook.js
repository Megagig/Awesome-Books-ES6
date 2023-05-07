removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

    export default removeBook;