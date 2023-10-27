import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  Grid,
  useMediaQuery,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { routes } from "../../../router/routes";
import { UsersResponse, GitHubUser } from "./model";
import { TableHeader } from "./table.header";
import { TableRows } from "./table.rows";

export const TableComponent = (data: UsersResponse) => {
  const { users } = data;
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;

  const isXsScreen = useMediaQuery("(max-width:600px)");

  const handleNavigation = (userId: string) => {
    const detailPath = routes.detail(userId);
    navigate(detailPath);
  };

  const handleChangePage = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(e);
    setPage(newPage);
  };

  return (
    <Grid container spacing={0} sx={{ flex: 1 }} item xs={14} md={10}>
      <TableContainer component={Paper}>
        <Table size="small" padding="normal">
          <TableHeader isXsScreen={isXsScreen} />
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user: GitHubUser) => (
                <TableRows
                  user={user}
                  isXsScreen={isXsScreen}
                  handleNavigation={handleNavigation}
                ></TableRows>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[rowsPerPage]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </Grid>
  );
};
