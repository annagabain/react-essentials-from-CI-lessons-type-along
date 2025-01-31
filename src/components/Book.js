import React from 'react'

function Book(props) {

    const book = props.book
    return (

        <div key={book.title}>
            <h5>Title: {book.title}</h5>
            <p>Author {book.author}</p>
            <p>Pages: {book.pages}</p>
            ---
        </div>
    )
}

export default Book