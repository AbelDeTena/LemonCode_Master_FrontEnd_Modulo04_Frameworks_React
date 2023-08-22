import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

import LogoLoading from "../assets/octocat-spinner-smil.min.svg";

export function Loading() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <Box sx={{ marginTop: 50 }}>
        <img
          width="100"
          height="100"
          src={LogoLoading}
          alt="Loading animation"
        />
        <Typography>Loading...</Typography>
      </Box>
    </>
  );
}
