import { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { loginRequest } from "./authConfig";
import { useMsal } from "@azure/msal-react";

interface LoginPageProps {
}

interface LoginPageState {
  username: string;
  password: string;
  rememberMe: boolean;
  error: string;
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        DubPool
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function LoginForm() {
  const { instance } = useMsal();
  return <Box
    component="form"
    noValidate
    onSubmit={(e) => {
      e.preventDefault();
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e);
      });
    }}
    sx={{ mt: 1 }}
  >
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
    <Copyright sx={{ mt: 5 }} />
  </Box>;
}

class LoginPage extends Component<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberMe: false,
      error: "",
    };
  }

  componentDidMount() { }

  render() {
    return (
      <div>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(/assets/img/login-bg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;