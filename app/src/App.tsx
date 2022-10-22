import './App.css';
import MainPage from './components/ui/MainPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <MainPage />
    </div>
  );
}

export default App;
