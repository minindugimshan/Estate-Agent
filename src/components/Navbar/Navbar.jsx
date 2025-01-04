// import './Navbar.css'

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">RightHome</div>
//       <div className="nav-links">
//         <a href="#buy">Buy</a>
//         <a href="#rent">Rent</a>
//         <a href="#house-prices">House Prices</a>
//         <a href="#find-agent">Find Agent</a>
//         <a href="#commercial">Commercial</a>
//         <a href="#inspire">Inspire</a>
//         <a href="#overseas">Overseas</a>
//       </div>
//       <button className="sign-in-btn">Sign in</button>
//     </nav>
//   )
// }

// export default Navbar

import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed
import './styles.css';

function Navbar() {
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = (event) => {
    setAuthAnchorEl(event.currentTarget);
  };

  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleAuthClose = () => {
    setAuthAnchorEl(null);
  };

  const handleUserClose = () => {
    setUserAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleUserClose();
    navigate('/');
  };

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
            <Button color="inherit" component={Link} to="/buy">Buy</Button>
            <Button color="inherit" component={Link} to="/rent">Rent</Button>
            <Button color="inherit" component={Link} to="/house-prices">House Prices</Button>
            <Button color="inherit" component={Link} to="/find-agent">Find Agent</Button>
            <Button color="inherit" component={Link} to="/commercial">Commercial</Button>
            <Button color="inherit" component={Link} to="/inspire">Inspire</Button>
            <Button color="inherit" component={Link} to="/overseas">Overseas</Button>
          </nav>
          
          {user ? (
            <>
              <Button
                onClick={handleUserClick}
                sx={{ ml: 2, textTransform: 'none' }}
                startIcon={
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {user.name?.charAt(0).toUpperCase()}
                  </Avatar>
                }
              >
                {user.name}
              </Button>
              <Menu
                anchorEl={userAnchorEl}
                open={Boolean(userAnchorEl)}
                onClose={handleUserClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleUserClose} component={Link} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem onClick={handleUserClose} component={Link} to="/favorites">
                  Favorites
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button 
                variant="outlined" 
                color="primary"
                onClick={handleAuthClick}
                sx={{ ml: 2 }}
              >
                Sign in
              </Button>
              <Menu
                anchorEl={authAnchorEl}
                open={Boolean(authAnchorEl)}
                onClose={handleAuthClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem 
                  component={Link} 
                  to="/signin" 
                  onClick={handleAuthClose}
                >
                  Sign In
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/signup" 
                  onClick={handleAuthClose}
                >
                  Sign Up
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;