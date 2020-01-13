import React from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

class BookShelve extends React.Component {
      componentDidMount() {
            this.props.handler();
      }
      render() {
            const { books } = this.props;

            const currentlyReadingBooks = books.filter(
                  book => book.shelf === 'currentlyReading'
            );
            const wantToReadBooks = books.filter(
                  book => book.shelf === 'wantToRead'
            );
            const readBooks = books.filter(book => book.shelf === 'read');

            return (
                  <div className="list-books">
                        <div className="list-books-title">
                              <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                              <div>
                                    <div className="bookshelf">
                                          <h2 className="bookshelf-title">
                                                Currently Reading
                                          </h2>
                                          <div className="bookshelf-books">
                                                <ol className="books-grid">
                                                      {currentlyReadingBooks.map(
                                                            book => (
                                                                  <BookCard
                                                                        key={
                                                                              book.id
                                                                        }
                                                                        id={
                                                                              book.id
                                                                        }
                                                                        authors={
                                                                              book.authors
                                                                        }
                                                                        title={
                                                                              book.title
                                                                        }
                                                                        shelf={
                                                                              book.shelf
                                                                        }
                                                                        imageLinks={
                                                                              book.imageLinks !==
                                                                              undefined
                                                                                    ? book
                                                                                            .imageLinks
                                                                                            .smallThumbnail
                                                                                    : null
                                                                        }
                                                                        updateBook={
                                                                              this
                                                                                    .props
                                                                                    .updateBook
                                                                        }
                                                                  />
                                                            )
                                                      )}
                                                </ol>
                                          </div>
                                    </div>
                                    <div className="bookshelf">
                                          <h2 className="bookshelf-title">
                                                Want to Read
                                          </h2>
                                          <div className="bookshelf-books">
                                                <ol className="books-grid">
                                                      {wantToReadBooks.map(
                                                            book => (
                                                                  <BookCard
                                                                        key={
                                                                              book.id
                                                                        }
                                                                        id={
                                                                              book.id
                                                                        }
                                                                        authors={
                                                                              book.authors
                                                                        }
                                                                        title={
                                                                              book.title
                                                                        }
                                                                        shelf={
                                                                              book.shelf
                                                                        }
                                                                        imageLinks={
                                                                              book.imageLinks !==
                                                                              undefined
                                                                                    ? book
                                                                                            .imageLinks
                                                                                            .smallThumbnail
                                                                                    : null
                                                                        }
                                                                        updateBook={
                                                                              this
                                                                                    .props
                                                                                    .updateBook
                                                                        }
                                                                  />
                                                            )
                                                      )}
                                                </ol>
                                          </div>
                                    </div>
                                    <div className="bookshelf">
                                          <h2 className="bookshelf-title">
                                                Read
                                          </h2>
                                          <div className="bookshelf-books">
                                                <ol className="books-grid">
                                                      {readBooks.map(book => (
                                                            <BookCard
                                                                  key={book.id}
                                                                  id={book.id}
                                                                  authors={
                                                                        book.authors
                                                                  }
                                                                  title={
                                                                        book.title
                                                                  }
                                                                  shelf={
                                                                        book.shelf
                                                                  }
                                                                  imageLinks={
                                                                        book.imageLinks !==
                                                                        undefined
                                                                              ? book
                                                                                      .imageLinks
                                                                                      .smallThumbnail
                                                                              : null
                                                                  }
                                                                  updateBook={
                                                                        this
                                                                              .props
                                                                              .updateBook
                                                                  }
                                                            />
                                                      ))}
                                                </ol>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="open-search">
                              <Link to="/search" className="link" />
                        </div>
                  </div>
            );
      }
}

export default BookShelve;
