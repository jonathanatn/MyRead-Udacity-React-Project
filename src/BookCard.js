import React from 'react';

class BookCard extends React.Component {
      constructor(props) {
            super(props);

            this.urlImage = 'url(' + props.imageLinks + ')';
            this.styles = {
                  width: 128,
                  height: 188,
                  backgroundImage: this.urlImage
            };
            this.state = {
                  value: this.props.shelf
            };
      }

      handleChange = event => {
            this.setState({
                  value: event.target.value
            });

            this.props.updateBook(
                  this.props.id,
                  event.target.value,
                  this.props
            );
      };

      render() {
            return (
                  <li className={this.props.id}>
                        <div className="book">
                              <div className="book-top">
                                    <div
                                          className="book-cover"
                                          style={this.styles}
                                    />
                                    <div className="book-shelf-changer">
                                          <select
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                          >
                                                <option value="move" disabled>
                                                      Move to...
                                                </option>
                                                <option value="currentlyReading">
                                                      Currently Reading
                                                </option>
                                                <option value="wantToRead">
                                                      Want to Read
                                                </option>
                                                <option value="read">
                                                      Read
                                                </option>
                                                <option value="none">
                                                      None
                                                </option>
                                          </select>
                                    </div>
                              </div>
                              <div className="book-title">
                                    {this.props.title}
                              </div>
                              <div className="book-authors">
                                    {this.props.authors &&
                                    this.props.authors.length > 1
                                          ? this.props.authors.join(', ')
                                          : this.props.authors}
                              </div>
                        </div>
                  </li>
            );
      }
}

export default BookCard;
