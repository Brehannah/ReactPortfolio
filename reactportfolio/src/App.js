// import React, { Component } from 'react';
// import './App.css';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import Main from './components/main';
// import { Link } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="demo-big-content">
//     <Layout>
//         <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
//             <Navigation>
//                 <Link to="/resume">Resume</Link>
//                 <Link to="/aboutme">About Me</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/contact">Contact</Link>
//             </Navigation>
//         </Header>
//         <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
//             <Navigation>
//               <Link to="/resume">Resume</Link>
//               <Link to="/aboutme">About Me</Link>
//               <Link to="/projects">Projects</Link>
//               <Link to="/contact">Contact</Link>
//             </Navigation>
//         </Drawer>
//         <Content>
//             <div className="page-content" />
//             <Main/>
//         </Content>
//     </Layout>
// </div>

//     );
//   }
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from "./components/Navbar";

import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Index from "./pages/index";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
   
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/about" component={About} /> */}
          
          <Route exact path="/portfolio" component={Portfolio} />
          
        
        
      </div>
    </Router>
  );
}

export default App;