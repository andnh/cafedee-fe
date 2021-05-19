import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import BlogPage from './pages/blog/blog.component'
import HomePage from './pages/home/home.component';
import Header from './components//header/header.component';
import Footer from './components/footer/footer.component';
import BlogDetail from './components/blogDetail/blogDetail.component';

function App() {
  return (
    <div className="App">
      {/* Let header know current user state */}
      <Header />
      <Switch className="main">
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/blog" component={BlogPage}></Route>
        <Route exact path="/blog/detail" component={BlogDetail}></Route>
      </Switch>
      <Footer id="footer" />
    </div>
  );
}

export default App;
