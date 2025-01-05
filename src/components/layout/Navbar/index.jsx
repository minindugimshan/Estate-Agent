import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold'
            }}
          >
            EstateAgent
          </Typography>
          
          <nav className="nav-links">
            <Button color="inherit" component={Link} to="/">Buy</Button>
            <Button color="inherit" component={Link} to="/">Rent</Button>
            <Button color="inherit" component={Link} to="/">House Prices</Button>
            {/* <Button color="inherit" component={Link} to="/find-agent">Find Agent</Button>
            <Button color="inherit" component={Link} to="/commercial">Commercial</Button>
            <Button color="inherit" component={Link} to="/inspire">Inspire</Button>
            <Button color="inherit" component={Link} to="/overseas">Overseas</Button> */}
          </nav>
          
          {/* <Button 
            variant="outlined" 
            color="primary"
            sx={{ ml: 2 }}
          >
            Sign in
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

