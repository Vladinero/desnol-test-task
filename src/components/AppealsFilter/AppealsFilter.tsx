'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";

import {Stack} from "@mui/system";
import Button from "@mui/material/Button";
import {Search} from "@/components/Search/Search";

interface IAppealFilterProps {
  isDetailPage?: boolean
}

export const AppealFilter = ({isDetailPage = false}: IAppealFilterProps) => {
  const filters = ['Все', 'Открытые', 'Закрытые', 'Ожидают ответа'];
  const router = useRouter();

  const [activeFilter, setActiveFilter] = useState<string>('Все');

  const handleFilter = (title: string) => {
    setActiveFilter(title)
  }
  const handleGoBack = () => {
    router.back()
  }

  return (
    <Stack
      direction="row"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {xs: 'column', md: 'row'},
        gap: 2,
        mb: 2
      }}>
      {isDetailPage ?
        <Button
          variant="contained"
          size="small"
          onClick={handleGoBack}
          color="primary">
          Назад
        </Button>
        : <Search/>
      }
      <Stack
        direction="row"
        gap={2}
        sx={
          {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            ustifyContent: {xs: 'center', md: 'space-between'}
          }
        }
      >
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
