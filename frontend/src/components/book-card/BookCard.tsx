import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Book } from "../../hooks/books/booktype";

interface BookCardProps {
  book: Book;
  removeFromSelected: (book: Book) => void;
  addToSelected: (book: Book) => void;
  isInReadingList: boolean; // Added prop to indicate whether the book is in the reading list
}

function BookCard({
  book,
  removeFromSelected,
  addToSelected,
  isInReadingList,
}: BookCardProps) {
  const handleRemoveFromSelected = () => {
    removeFromSelected(book);
  };

  const handleAddToSelected = () => {
    addToSelected(book);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        src={book.coverPhotoURL}
        sx={{ height: 200 }}
        title="Book Cover"
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {book.title}
        </Typography>
        <Typography variant="body2">{book.author}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          disableElevation
          onClick={handleRemoveFromSelected}
          disabled={!isInReadingList}
        >
          Remove From Read
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={handleAddToSelected}
          disabled={isInReadingList}
        >
          Add To Read
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
