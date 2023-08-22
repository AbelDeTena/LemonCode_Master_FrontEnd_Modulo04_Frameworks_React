import React from "react";
import { Grid, Container, Paper, Typography } from "@mui/material";

import { Logo } from "../../../assets/index";
import {PropsWithChildren} from "./model"

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Grid container component="main" sx={{ zIndex: 2 }}>
        <Container
          component={Paper}
          elevation={5}
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "3em",
            gap: 3,
          }}
        >
          <Typography component="h1" variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>GitHub Organizations Search</Typography>
          <Logo />
          {children} 
          <Grid container>
            <Grid item xs>
              <Typography sx={{ cursor: "pointer", textDecoration: "underline" }} variant="overline" onClick={() => { alert("test@email.com / 1234") }} >Forgot Password</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer", textDecoration: "underline" }} variant="overline" onClick={() => { alert("test@email.com / 1234") }} >Sign Up</Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};
