// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Nav current="home" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signin" component={SigninPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;