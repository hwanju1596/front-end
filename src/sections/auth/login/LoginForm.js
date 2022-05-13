import React from "react";
import { Stack, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <Stack spacing={3}>
      <TextField id="outlined-basic" label="Email Address" type="email" />

      <TextField
        id="outlined-basic"
        label="Passwords"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Button variant="contained">Contained</Button>
    </Stack>
  );
}
