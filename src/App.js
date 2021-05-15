import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import BlogPage from './pages/blog/blog.component'
import HomePage from './pages/home/home.component';
import Header from './components//header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      {/* Let header know current user state */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/blog" component={BlogPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
