import React from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookSearch extends React.Component {
      constructor(props) {
            super(props);

            this.updateQuery = this.updateQuery.bind(this);
            this.state = { query: '', books: [] };
            this.bookArray = [];
      }

      updateQuery = query => {
            this.setState(
                  () => ({
                        query: query
                  }),
                  () => {
                        if (query !== '') {
                              this.searchResults2(query);
                        } else {
                              this.setState(() => ({ books: [] }));
                        }
                  }
            );
      };

      searchResults2 = query => {
            BooksAPI.search(query).then(books => {
                  books && books.length > 0
                        ? (this.bookArray = books)
                        : (this.bookArray = []);

                  if (this.props.books.length > 0) {
                        for (let book of this.bookArray) {
                              for (let b of this.props.books) {
                                    if (book.id === b.id) {
                                          book.shelf = b.shelf;
                                          break;
                                    } else {
                                          book.shelf = 'none';
                                    }
                              }
                        }
                  } else {
                        for (let book of this.bookArray) {
                              book.shelf = 'none';
                        }
                  }
                  this.setState({ books: this.bookArray }, () => {
                        if (this.state.query === '') {
                              this.setState({
                                    books: []
                              });
                        }
                  });
            });
      };

      render() {
            return (
                  <div className="search-books">
                        <div className="search-books-bar">
                              <Link to="/" className="close-search" />
                              <div className="search-books-input-wrapper">
                                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                    <input
                                          type="text"
                                          placeholder="Search by title or author"
                                          value={this.state.query}
                                          onChange={event =>
                                                this.updateQuery(
                                                      event.target.value
                                                )
                                          }
                                    />
                              </div>
                        </div>
                        <div className="search-books-results">
                              <ol className="books-grid">
                                    {this.state.query !== '' ||
                                    this.state.books.length > 0
                                          ? this.state.books.map(book => (
                                                  <BookCard
                                                        key={book.id}
                                                        id={book.id}
                                                        //   authors={book.authors}
                                                        authors={
                                                              book.authors !==
                                                              undefined
                                                                    ? book.authors
                                                                    : null
                                                        }
                                                        title={book.title}
                                                        shelf={book.shelf}
                                                        imageLinks={
                                                              book.imageLinks !==
                                                              undefined
                                                                    ? book
                                                                            .imageLinks
                                                                            .smallThumbnail
                                                                    : null
                                                        }
                                                        updateBook={
                                                              this.props
                                                                    .updateBook
                                                        }
                                                  />
                                            ))
                                          : null}
                              </ol>
                        </div>
                  </div>
            );
      }
}

export default BookSearch;
