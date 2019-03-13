import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import BookTable from "./BookTable";
import AddBookModal from "./AddBookModal";

// Stores
import authorStore from "./stores/authorStore";
import bookStore from "./stores/bookStore";

class AuthorDetail extends Component {
  render() {
    const authorID = this.props.match.params.authorID;
    const author = authorStore.getAuthorById(authorID);
    const authorName = `${author.first_name} ${author.last_name}`;

    const books = author.books.map(bookID => bookStore.getBookById(bookID)); //array of book ids (author.books)

    return (
      <div>
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={books} />
        <AddBookModal author={author} />
      </div>
    );
  }
}

export default observer(AuthorDetail);
