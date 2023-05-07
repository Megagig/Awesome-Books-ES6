renderBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    // Header for list books page
    const h1 = document.createElement('h1');
    h1.textContent = 'All Awesome Books';
    bookList.appendChild(h1);

    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
        this.renderBookList();
      });
      li.appendChild(removeBtn);
      bookList.appendChild(li);
    });
  }

  export default renderBookList;