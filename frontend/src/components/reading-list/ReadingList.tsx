import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Book } from "../../hooks/books/booktype";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

function ReadingList({
  selectedBooks,
  removeFromSelected,
}: {
  selectedBooks: Book[];
  removeFromSelected: (book: Book) => void; // Updated type for removeFromSelected
}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        onClick={() => setOpen(true)}
      >
        Reading List
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"md"}>
        <DialogTitle>
          Reading List
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedBooks.length === 0 ? (
            <DialogContentText>No books in reading list.</DialogContentText>
          ) : (
            <>
              {selectedBooks.map((book, index) => (
                <Grid
                  container
                  spacing={2}
                  key={index}
                  my={3}
                  // sx={{
                  //   display: "flex",
                  //   alignItems: "center", // Align flex items vertically centered
                  //   gap: 2,
                  // }}
                >
                  <Grid
                    item
                    xs={3}
                    sx={{
                      backgroundImage: `url(${book.coverPhotoURL})`, // Fixed: Add 'url()' to backgroundImage
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "200px",
                    }}
                  ></Grid>
                  <Grid item xs={"auto"}>
                    <Typography variant="h5">{book.title}</Typography>
                    <Typography variant="body2">
                      Author:
                      <span style={{ color: "gray", fontWeight: "bold" }}>
                        {book.author}
                      </span>{" "}
                      &nbsp; &nbsp; Reading Level:
                      <span style={{ color: "gray", fontWeight: "bold" }}>
                        {book.readingLevel}
                      </span>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeFromSelected(book)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ReadingList;
