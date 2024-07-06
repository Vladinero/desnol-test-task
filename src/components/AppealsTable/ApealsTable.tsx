'use client';
import {useState} from "react";

import Link from "next/link";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {IDataModel} from "@/models/dataModel";
import {TablePagination} from "@/components/TablePagination";

interface IAppealsTableProps {
  data: IDataModel[]
}

export const AppealsTable = ({data=[]}: IAppealsTableProps) => {
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Тема</TableCell>
              <TableCell align="right">Номер</TableCell>
              <TableCell align="right">Дата создания</TableCell>
              <TableCell align="right">Дата изменения</TableCell>
              <TableCell align="right">Крайний срок</TableCell>
              <TableCell align="right">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((row) => (
              <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  <Link href={`/appeals/${row.id}`}>{row.theme}</Link>
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">{row.modifiedAt}</TableCell>
                <TableCell align="right">{row.deadline}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={pageCount}
        page={page}
        onChangePage={handlePageChange}
      />
    </>
  );
}
