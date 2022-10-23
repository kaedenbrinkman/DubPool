import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../home/Header";
import AboutPage from "../home/HomePage";
import HowItWorks from "../home/HowItWorks";
import Matches from "../matches/Matches";
import LoginPage from "../login/LoginPage";
import NavBar from "./NavBar";
import Messages from "../messages/Messages";
import Onboarding from "../onboarding/Onboarding";
import Privacy from "../privacy/Privacy";
import About from "../about/About";
import FAQ from "../faq/FAQ";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

interface MainPageProps { }

interface MainPageState {
  netid: string | null;
}

class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      netid: localStorage.getItem("netid"),
    };
  }
  render() {
    return (
      <BrowserRouter>
        <AuthenticatedTemplate>
          <NavBar />
          {localStorage.getItem("onboardingComplete") ? (
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<Onboarding />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Matches />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<Matches />} />
            </Routes>
          )}
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Header />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </UnauthenticatedTemplate>
      </BrowserRouter>
    );
  }
}

export default MainPage;