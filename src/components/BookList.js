import React from "react";

const BookList = () => {
  const booklist = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age",
    },
    {
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      genre: "Modernist",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Coming-of-age",
    },
    {
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      genre: "Modernist",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {booklist.map((book, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid",
              width: "250px",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <h5>{book.genre}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
