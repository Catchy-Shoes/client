import * as React from 'react';
import '../../App.css'
// import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { LockOutlinedIcon } from '@mui/icons-material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://localhost:3000/">
        Catchy Shoes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignUpPage=()=> {

    return (
    //     <ThemeProvider theme={theme}>
    //   <Grid container component="main" sx={{ height: '100vh' }}>
    //     <CssBaseline />
    //     <Grid
    //       item
    //       xs={false}
    //       sm={4}
    //       md={7}
    //       sx={{
    //         backgroundImage: 'url(https://source.unsplash.com/random)',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundColor: (t) =>
    //           t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //       }}
    //     />
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //       <Box
    //         sx={{
    //           my: 8,
    //           mx: 4,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //           <LockOutlinedIcon />
    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //           Sign in
    //         </Typography>
    //         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             name="email"
    //             autoComplete="email"
    //             autoFocus
    //           />
    //           <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox value="remember" color="primary" />}
    //             label="Remember me"
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             sx={{ mt: 3, mb: 2 }}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid container>
    //             <Grid item xs>
    //               <Link href="#" variant="body2">
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //             <Grid item>
    //               <Link href="#" variant="body2">
    //                 {"Don't have an account? Sign Up"}
    //               </Link>
    //             </Grid>
    //           </Grid>
    //           <Copyright sx={{ mt: 5 }} />
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
export {SignUpPage}

export class RegisterPage {
}
