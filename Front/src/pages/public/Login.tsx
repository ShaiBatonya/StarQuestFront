import * as React from 'react';
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/3804/38f8/0f099fa5748b5cd15243108ac5738d70?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0pANu0P3dCVmQHNm35KaxzSx-kqixEDVMmWxbNUgH2jGcCFmmwchaOPIQyT4GsBRjr63-jlUQ~cgGaVZ8VJhrucOIMAXPFv-boZeBNdN86W6mUmMpTS-gYkKfyECmiLIzozhAr8hYQXq982v6NAkFj85j-apKxdQu0uWhlFHuu-k8izj0nvOb79LXIGQsCcktkc28j08HnYZdEbIVkKDwK1vgA6jHtn1Murtwg8Ka5jX~-tNGtGD4jr8ffn0a7vH-LZwDUD0QkGdfH-ilTKFIoP8K7kowkuxGpNg5dIkNyXwX6zFJETlpdAVeD5kyeyN4ZybUGDYM~DLPo2yo~jqA__)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
          backgroundColor: '#2E2E2E',
          backgroundPosition: 'right',
        }}>
          <Box
            sx={{
              my: 5,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Typography component="h1" variant="h5" sx={{ color: 'white', alignSelf: 'flex-start', mb: 3 }}>
               Please Login 
              </Typography>
              <span style={{ color: 'white' }}>Email Address</span>
              <TextField

                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                

              />

<span style={{ color: 'white' }}>password</span>
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'white',
                  alignItems: 'center',
                }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Box>
              <Box mt={7}>


                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '##0143FF' }}
                >
                  Login
                </Button>



                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '##0143FF' }}
                  to="/register"
                  component={RouterLink}
                >
                  Register
                </Button>
              </Box>



              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}