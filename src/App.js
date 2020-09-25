import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './components/Menu';
import About from "./pages/About";
import Products from "./pages/Products";
// import Blog from './pages/Blog';
import Contact from "./pages/Contact";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Layout>
    </>
  );
}

export default App;
