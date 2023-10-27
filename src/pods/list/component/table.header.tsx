import { TableCell, TableHead, TableRow } from "@mui/material";

interface Prop {
  isXsScreen: boolean;
}

export const TableHeader = ({ isXsScreen }: Prop) => {
  return (
    <TableHead sx={{ backgroundColor: "#540097" }}>
      <TableRow>
        <TableCell sx={{ color: "#FFFFFF" }}>Avatar</TableCell>
        {!isXsScreen && <TableCell sx={{ color: "#FFFFFF" }}>Login</TableCell>}
        {!isXsScreen && <TableCell sx={{ color: "#FFFFFF" }}>Id</TableCell>}
        <TableCell sx={{ color: "#FFFFFF" }}>Link</TableCell>
      </TableRow>
    </TableHead>
  );
};
