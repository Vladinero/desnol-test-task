  import Pagination from '@mui/material/Pagination';
  import Stack from '@mui/material/Stack';

  export interface IPaginationProps {
    count: number
    page: number
    onChangePage: (value: number) => void
  }

export const TablePagination = ({count, page, onChangePage}: IPaginationProps) => {

  return (
      <Stack spacing={2} mt={2}>
        <Pagination
          count={count}
          page={page}
          color="primary"
          onChange={(_, value) => onChangePage(value)}
        />
      </Stack>
    );
}
