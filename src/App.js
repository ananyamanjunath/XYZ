import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';
import LoginSignupPage from './components/LoginSignupPage';
import UserProfile from './components/UserProfile';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginSignupPage} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
