import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {ChangeEvent, useState} from "react";

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearch(value);
  }
  const handleReset = () => {
    setSearch('');
  }

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  }
  return (
    <form onSubmit={onSubmit}>
      <TextField
        type="search"
        name="search"
        size="small"
        required
        value={search}
        onChange={handleSearch}
        autoComplete="one-time-code"
        sx={{borderRadius: '50%', mb: 2, width: '100%'}}
        InputProps={{
          startAdornment: <InputAdornment position="start">
            <IconButton
              type="submit"
            >
              <SearchOutlinedIcon/>
            </IconButton>
          </InputAdornment>,
          endAdornment: <InputAdornment position="end">
            <IconButton
              onClick={handleReset}
            >
              <CloseOutlinedIcon/>
            </IconButton></InputAdornment>,
        }}
      />
    </form>
  )
}
