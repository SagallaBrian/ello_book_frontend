import Container from "@mui/material/Container";
import BooksPage from "./pages/BooksPage";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Container maxWidth="lg" >
        <Box sx={{ my: 4 }}>
          <BooksPage />
        </Box>
      </Container>
    </>
  );
}

export default App;
