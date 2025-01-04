// import { useState } from 'react';
// import { useNavigate, Link as RouterLink } from 'react-router-dom';
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Link,
//   Paper,
// } from '@mui/material'
// import { useAuth } from '../../context/AuthContext'

// function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   })
//   const [error, setError] = useState('')
//   const navigate = useNavigate()
//   const { login } = useAuth()

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError('')

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match')
//       return
//     }

//     try {
//       // In a real app, you would create an account with a backend
//       // For demo, we'll simulate a successful registration
//       login({
//         name: formData.name,
//         email: formData.email,
//       })
//       navigate('/')
//     } catch (err) {
//       setError('Failed to create account')
//     }
//   }

//   return (
//     <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Sign Up
//       </Typography>
      
//       <Box component="form" onSubmit={handleSubmit} noValidate>
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="name"
//           label="Full Name"
//           name="name"
//           autoComplete="name"
//           autoFocus
//           value={formData.name}
//           onChange={handleChange}
//         />
        
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
        
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="new-password"
//           value={formData.password}
//           onChange={handleChange}
//         />
        
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="confirmPassword"
//           label="Confirm Password"
//           type="password"
//           id="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
        
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
        
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign Up
//         </Button>
        
//         <Box sx={{ textAlign: 'center' }}>
//           <Link component={RouterLink} to="/signin" variant="body2">
//             Already have an account? Sign In
//           </Link>
//         </Box>
//       </Box>
//     </Paper>
//   )
// }

// export default SignUpForm

import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Typography, Box, Link, Paper } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

function SignUpForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      login({ name: formData.name, email: formData.email });
      navigate('/');
    } catch {
      setError('Failed to create account');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Link component={RouterLink} to="/signin" variant="body2">
            Already have an account? Sign In
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}

export default SignUpForm;
