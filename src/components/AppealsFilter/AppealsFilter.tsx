'use client';
import {useState} from "react";
import {Stack} from "@mui/system";
import Button from "@mui/material/Button";
import {Search} from "@/components/Search/Search";

export const AppealFilter = () => {
  const filters = ['Все', 'Открытые', 'Закрытые', 'Ожидают ответа'];

  const [activeFilter, setActiveFilter] = useState<string>('Все');

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
      <Search />
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
