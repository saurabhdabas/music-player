import React from 'react';
import {Button, Box, Typography} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const Login = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
    HOST,
    KEY
  } = process.env;
  console.log("env:",process.env);
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <Box sx={{ width:'30vw', height:'50vh',m: "auto" }} display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
      <Typography align = 'center' color={'whitesmoke'} fontSize={50} fontFamily={'Pacifico'}>
      Spotify Music Search
      </Typography>
      <img src="music-logo.png" height="200" alt="company logo"/>
      <Button sx={{ backgroundColor: '#DC3545' }} startIcon={<VpnKeyIcon/>}variant="contained" onClick={handleLogin}>
      Login from Spotify
      </Button>
  </Box>
  )
}
export default Login;

