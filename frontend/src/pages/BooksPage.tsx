import React, { useState } from "react";
import BookCard from "../components/book-card/BookCard";
import SearchBar from "../components/search-bar/SearchBar";
import ReadingList from "../components/reading-list/ReadingList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";
import { Book } from "../hooks/books/booktype";
import { useBookQuery } from "../hooks/books/bookQuery";

function BooksPage() {
  const { loading, error, data } = useBookQuery();
  const [page, setPage] = useState<number>(1);
  const [_books, setBooks] = useState<Book[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);

  const itemsPerPage = 9;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filterBooks = (bookNameOrAuthor: string) => {
    const filteredBooks = data.books.filter(
      (book: Book) =>
        book.title.toLowerCase().includes(bookNameOrAuthor.toLowerCase()) ||
        book.author.toLowerCase().includes(bookNameOrAuthor.toLowerCase())
    );
    setBooks(filteredBooks);
    setPage(1); // Reset pagination after filtering
  };

  const addToSelected = (book: Book) => {
    setSelectedBooks([...selectedBooks, book]);
  };

  const removeFromSelected = (book: Book) => {
    setSelectedBooks(
      selectedBooks.filter((selectedBook) => selectedBook !== book)
    );
  };

  const isInReadingList = (book: Book) => {
    return selectedBooks.some((selectedBook) => selectedBook === book);
  };

  // Calculate start and end index for pagination
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box>
      <Typography variant="h4">Ello Book Store</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        <SearchBar filterBooks={filterBooks} />
        <ReadingList
          selectedBooks={selectedBooks}
          removeFromSelected={removeFromSelected}
        />
      </Box>
      <Grid container spacing={2}>
        {data.books
          .slice(startIndex, endIndex)
          .map((itm: Book, indx: number) => (
            <Grid item sm={6} md={4} key={indx}>
              <BookCard
                removeFromSelected={removeFromSelected}
                addToSelected={addToSelected}
                book={itm}
                isInReadingList={isInReadingList(itm)}
              />
            </Grid>
          ))}
      </Grid>
      <Pagination
        count={Math.ceil(data.books.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        sx={{ mt: 3 }}
      />
    </Box>
  );
}

export default BooksPage;
