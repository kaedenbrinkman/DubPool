import './App.css';
import MainPage from './components/ui/MainPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";

function App() {
  // check for "code" in URL
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  if (code) {
    auth(code);
  }
  return (
    <div className="App">
      <Toaster />
      <MainPage />
    </div>
  );
}

function auth(code: string) {
  console.log("Authenticating...");
  console.log(code);
  const clientID = "984a4313-0cf1-4996-aab5-a21a521a1ee0";
  const tenantID = "f6b6dd5b-f02f-441a-99a0-162ac5060bd2";
  const redirectURL = window.location.origin;
  const url = `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/token`;
  const body = `client_id=${clientID}&scope=openid%20profile%20offline_access&code=${code}&redirect_uri=${redirectURL}&grant_type=authorization_code`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

export default App;
