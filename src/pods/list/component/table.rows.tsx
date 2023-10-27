import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { GitHubUser } from "./model";

import { routes } from "../../../router/routes";

interface TableRowsProps {
  user: GitHubUser;
  isXsScreen: boolean;
  handleNavigation: (userId: string) => void;
}

export const TableRows = ({
  user,
  isXsScreen,
  handleNavigation,
}: TableRowsProps) => {
  return (
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

      {!isXsScreen && <TableCell align="left">{user.login}</TableCell>}
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
  );
};
