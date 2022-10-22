import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutHeader from "../about/AboutHeader";
import AboutPage from "../about/AboutPage";
import HowItWorks from "../about/HowItWorks";
import Matches from "../matches/Matches";
import LoginPage from "../login/LoginPage";
import SignUpPage from "../login/SignUp";
import NavBar from "./NavBar";
import Messages from "../messages/Messages";
import Onboarding from "../onboarding/Onboarding";

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
      return (
        <BrowserRouter>
          <AboutHeader />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Matches />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/welcome" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default MainPage;