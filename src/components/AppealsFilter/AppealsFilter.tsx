import {type ChangeEvent, useState} from "react";

import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Stack} from "@mui/system";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Button from "@mui/material/Button";

export const AppealFilter = () => {
  const filters = ['Все', 'Открытые', 'Закрытые', 'Ожидают ответа'];
  const [search, setSearch] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('Все');

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
  const handleFilter = (title: string) => {
    setActiveFilter(title)
  }

  return (
    <Stack
      direction="row"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {xs: 'column', md: 'row'},
    }}>
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
    <Stack direction="row" gap={2} sx={{display: 'flex', flexWrap: 'wrap'}}>
      {filters.map(f => {
        return (
          <Button
            key={f}
            variant={activeFilter === f ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleFilter(f)}
          >
            {f}
          </Button>
        )
      })}
    </Stack>
  </Stack>)
}
