import TextField from "@mui/material/TextField";
import { useState } from "react";
import { debounce } from "lodash"; // Import debounce function from lodash

function SearchBar({ filterBooks }: { filterBooks: (filter: string) => void }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    // Call filterBooks with the debounced value
    debouncedFilter(newFilter);
  };

  const debouncedFilter = debounce((value: string) => {
    filterBooks(value);
  }, 300); // Debounce time in milliseconds

  return (
    <TextField
      variant="outlined"
      label="Search Book"
      size="small"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Enter book title or author"
    />
  );
}

export default SearchBar;
