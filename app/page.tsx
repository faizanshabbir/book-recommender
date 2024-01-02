"use client"

import { useState } from 'react';
import { Input } from "@/components/ui/input"

export default function Home() {
  const [books, setBooks] = useState([{ id: 1, name: '' }]);

  const addBook = () => {
    setBooks([...books, { id: Math.random(), name: '' }]);
  };

  const updateBook = (id: number, name: string) => {
    setBooks(books.map(book => book.id === id ? { id, name } : book));
  };
  
  const submitBooks = () => {
    const bookNames = books.map(book => book.name);
    console.log(bookNames);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Books read recently:</p>
      {books.map(book => (
        <Input
          key={book.id}
          type="text"
          placeholder="Book"
          value={book.name}
          onChange={e => updateBook(book.id, e.target.value)}
        />
      ))}
      <button onClick={addBook}>+</button>
      <button onClick={submitBooks}>Submit</button>
    </main>
  )
}