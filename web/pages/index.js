import { useTheme } from "@mui/material/styles";
import RootLayout from "./layout";
import axios from "axios";

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Filters = (props) => {
  const filters = props.filters;
  const setFilters = props.setFilters;

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      noValidate
      component={"form"}
    >
      Suggest{" "}
      <FormControl>
        <TextField
          id="amount of suggestions"
          label="Amount of Suggestion"
          type="number"
          variant="filled"
          value={filters.amount}
          onChange={(e) => handleFilterChange("amount", e.target.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="media"
          label="Media"
          select
          variant="filled"
          fullWidth
          value={filters.media}
          onChange={(e) => handleFilterChange("media", e.target.value)}
        >
          <MenuItem value="movies">Movies</MenuItem>
          <MenuItem value="tv shows">TV shows</MenuItem>
        </TextField>
      </FormControl>
      that are in the{" "}
      <FormControl>
        <TextField
          id="genre"
          label="Genre"
          variant="filled"
          value={filters.genre}
          onChange={(e) => handleFilterChange("genre", e.target.value)}
        />
      </FormControl>{" "}
      genre
    </Box>
  );
};

export default function Home() {
  const [filters, setFilters] = useState({
    amount: 1,
    media: "movies",
    genre: "action",
  });
  const [search, setSearch] = useState();
  const [suggest, setSuggest] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);

  const handleSubmit = (e) => {
    const query = `Suggest ${filters.amount} ${filters.media} that are in the ${filters.genre} genre`;
    setSearch(query);
    console.log(search);
  };

  const fetchData = async () => {
    setLoading(true);
    const body = {
      query: search,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const request = axios.post("/api/openai", body, headers);
    const response = await request.then((res) => res.data);
    const data = response.choices[0].text;
    setSuggest(data);
    setLoading(false);
  };

  const theme = useTheme();

  return (
    <RootLayout>
      <Box
        bgcolor={theme.palette.grey["A700"]}
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Filters filters={filters} setFilters={setFilters} />
        <Button variant="filled" onClick={handleSubmit} color="primary">
          Go
        </Button>
      </Box>
      <Box
        bgcolor={theme.palette.grey["A700"]}
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Box>
            <Typography variant="h2">AI Suggests</Typography>

            {suggest}
          </Box>
        )}
      </Box>
    </RootLayout>
  );
}
