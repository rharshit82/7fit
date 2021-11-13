import './App.css';
import Header from './components/Navbar/Header';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import UploadScreen from './Screens/UploadScreen';
import WallScreen from './Screens/WallScreen';
// import ImageScreen from './Screens/ImageScreen';


function App() {

  return (
    <div className="App">
      <Router>
      <header><Header/></header>
      <main>
      <Switch>
          <Route exact path='/' component={() => <Banner />} />
          {/* <Route exact path='/upload' component={() => <UploadScreen />} />: */}
            

          <Route exact path='/wall' component={() => <WallScreen />} />
          

        </Switch>
      </main>
      <footer><Footer/></footer>
      </Router>
    </div>
  );
}

export default App;