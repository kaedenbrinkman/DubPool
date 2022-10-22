import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import LoginPage from "../login/LoginPage";
import NavBar from "./NavBar";

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
      return <LoginPage />;
    }
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default MainPage;