import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { OrganizationContextModel } from "../../../core/provider/organization/model";
import Logo from "../../../assets/LoginIcon.png";
import { routes } from "../../../router/index";
import { useNavigate } from "react-router-dom";

export function Navbar({
  organization,
  setOrganization,
}: OrganizationContextModel) {
  const [newOrganization, SetNewOrganization] =
    React.useState<string>(organization);
  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetNewOrganization(event.target.value);
  };

  const handleSearchIconClick = () => {
    setOrganization(newOrganization);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routes.characters);
  };
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            paddingRight: 3,
            display: { xs: "none", sm: "block" },
          }}
        >
          <Avatar alt="Logo" src={Logo} />
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 5, display: { xs: "none", sm: "none", md: "block" } }}
        >
          GitHub Organizations Search
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
          }}
          onClick={handleNavigate}
        >
          Ricky & Morty Section
        </Typography>

        <TextField
          autoFocus
          label="Organization"
          value={newOrganization}
          variant="filled"
          size="small"
          sx={{ backgroundColor: "white", borderRadius: 3, flexGrow: 1 }}
          InputProps={{
            endAdornment: (
              <SearchIcon
                onClick={handleSearchIconClick}
                sx={{ cursor: "pointer", "&:hover": { color: "blue" } }}
              />
            ),
          }}
          onChange={handleOrganizationChange}
        />
      </Toolbar>
    </AppBar>
  );
}
