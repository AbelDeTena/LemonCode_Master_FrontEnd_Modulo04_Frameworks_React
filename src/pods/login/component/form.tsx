import React from "react";
import { TextField, IconButton, FormControlLabel, Checkbox, Button } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';

import {LoginFormHook  } from "./model";


export const Form: React.FC<LoginFormHook > = ({ user, error, showPassword, handleLogin, handleTogglePasswordVisibility, handleNavigation }) => {
  return (
    <>
      <form onSubmit={handleNavigation}>
        <TextField
          fullWidth
          autoFocus
          helperText={error.email.error ? error.email.message : ""}
          error={error.email.error}
          required
          type="email"
          color="primary"
          margin="normal"
          variant="outlined"
          label="email"
          name="email"
          value={user.email}
          onChange={handleLogin}
        />
        <TextField
          fullWidth
          required
          type={showPassword ? "text" : "password"}
          error={error.password.error}
          helperText={error.password.error ? error.password.message : ""}
          color="primary"
          margin="normal"
          variant="outlined"
          value={user.password}
          onChange={handleLogin}
          label="Password"
          name="password"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityIcon color="primary" /> : <VisibilityOffIcon color="primary" />}
              </IconButton>
            ),
          }}
        />
        <FormControlLabel color="primary"
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: 4 }}>
          Log In
        </Button>
      </form>
    </>
  )
}
