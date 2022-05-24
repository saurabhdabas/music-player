import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Login from './components/Buttons/Login';
import Redirect from './components/Redirect';
function App() {
  return (
    <Grid 
      sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0C0906'
    }}
    display='flex'
    flexDirection={'column'}>
      <Routes> 
        <Route path="/" 
          element={
            <Login/>
          }
        />
        <Route path="/redirect" 
          element={
            <Redirect/>
          }
        />  
      </Routes>
    </Grid>
  );
}

export default App;