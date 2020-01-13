import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookSearch from './BookSearch';
import BookShelve from './BookShelve';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
      constructor(props) {
            super(props);
            this.handler = this.handler.bind(this);
            this.state = {
                  book: {},
                  books: []
            };
      }

      handler() {
            BooksAPI.getAll().then(books => {
                  this.setState(() => ({
                        books
                  }));
            });
      }

      updateBook = (id, value, object) => {
            let obj = object;
            if (this.state.books.length > 0) {
                  let books = JSON.parse(JSON.stringify(this.state.books));
                  let book = books.filter(b => b.id === id);
                  if (book.length > 0) {
                        book[0].shelf = value;
                        books = books.filter(b => b.id !== id);
                        books.push(book[0]);
                  } else {
                        books.push(obj);
                  }

                  BooksAPI.update(obj, value).then(
                        this.setState(currentState => ({
                              books: books
                        }))
                  );
            }
      };

      render() {
            return (
                  <div className="app">
                        <Route
                              path="/"
                              exact
                              render={() => (
                                    <BookShelve
                                          books={this.state.books}
                                          updateBook={this.updateBook}
                                          handler={this.handler}
                                    />
                              )}
                        />
                        <Route
                              path="/search"
                              exact
                              render={() => (
                                    <BookSearch
                                          books={this.state.books}
                                          updateBook={this.updateBook}
                                    />
                              )}
                        />
                  </div>
            );
      }
}

export default BooksApp;
