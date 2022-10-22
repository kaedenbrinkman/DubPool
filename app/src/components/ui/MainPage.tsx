import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../home/Header";
import AboutPage from "../home/HomePage";
import HowItWorks from "../home/HowItWorks";
import Matches from "../matches/Matches";
import LoginPage from "../login/LoginPage";
import SignUpPage from "../login/SignUp";
import NavBar from "./NavBar";
import Messages from "../messages/Messages";
import Onboarding from "../onboarding/Onboarding";
import Privacy from "../privacy/Privacy";
import About from "../about/About";
import FAQ from "../faq/FAQ";

interface MainPageProps { }

interface MainPageState {
  user: User | null;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
}

class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
    };
  }
  render() {
    if (!this.state.user) {
      // these pages are accessible when not logged in
      return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      );
    }
    // these pages are accessible when logged in
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Matches />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/welcome" element={<Onboarding />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default MainPage;