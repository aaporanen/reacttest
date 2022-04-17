import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url, { mode: 'cors' }).then(response => response.json());

function App() {
  const { data, error } = useSWR("https://net6testapp.azurewebsites.net/test", fetcher);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {JSON.stringify(data)}
    </Box>
  );
}

export default App;
