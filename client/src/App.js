import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UploadScreen from "./screens/UploadScreen/UploadScreen";
import WallScreen from "./screens/WallScreen/WallScreen";
import Footer from "./components/Footer/Footer";
// import ImageScreen from './Screens/ImageScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/upload" component={() => <UploadScreen />} />:
            <Route exact path="/wall" component={() => <WallScreen />} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
