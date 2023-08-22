import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  useMediaQuery,
  TablePagination,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { routes } from "../../../router/routes";
import { UsersResponse, GitHubUser } from "./model";

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
          <TableHead sx={{ backgroundColor: "#540097" }}>
            <TableRow>
              <TableCell sx={{ color: "#FFFFFF" }}>Avatar</TableCell>
              {!isXsScreen && (
                <TableCell sx={{ color: "#FFFFFF" }}>Login</TableCell>
              )}
              {!isXsScreen && (
                <TableCell sx={{ color: "#FFFFFF" }}>Id</TableCell>
              )}
              <TableCell sx={{ color: "#FFFFFF" }}>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user: GitHubUser) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <img
                      src={user.avatar_url}
                      alt="Avatar"
                      style={{ width: "80px", height: "80px" }}
                    />
                    {isXsScreen ? <>{user.login}</> : null}
                  </TableCell>

                  {!isXsScreen && (
                    <TableCell align="left">{user.login}</TableCell>
                  )}
                  {!isXsScreen && <TableCell align="left">{user.id}</TableCell>}
                  <TableCell align="left">
                    <Link
                      onClick={() => handleNavigation(user.id.toString())}
                      to={routes.detail(user.id.toString())}
                    >
                      Click Here
                    </Link>
                  </TableCell>
                </TableRow>
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
