import { Box, Typography } from "@mui/material";

import { Logo } from "../assets/index";

export function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: 2,
        marginTop: 30,
        flexWrap: "wrap",
      }}
    >
      <Logo />
      <Typography
        component="h1"
        variant="h5"
        color="primary"
        sx={{ fontWeight: "bold", marginLeft: 2 }}
      >
        ¡Oh no! An error occurred.
      </Typography>
    </Box>
  );
}
