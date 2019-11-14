import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <div className="body">
      <div className="header" style={{paddingLeft: 15}}>
        <b style={{float: "left"}}>CRUD ReactJS</b>
        <b style={{float: "right", fontSize: 25, padding: 10}}>{new Date().toLocaleTimeString()}</b>
      </div>
        <Router>
      <div className="nav">
        <ul className="navbar-nav mr-auto">
          <li className="fa fa-circle-o">
              <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li className="fa fa-circle-o">
            <Link to={'/create'} className="nav-link">Tambah Data</Link>
          </li>
          <li className="fa fa-circle-o">
            <Link to={'/read'} className="nav-link">Lihat Data</Link>
          </li>
        </ul>
      </div>
      <div className="content">
          <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/read' component={ Read } />
          </Switch>
      </div>
        </Router>
      <div className="footer">
        <strong><h5 style={{float: "left"}}>Copyright &copy; 2019 #Belajar ReactJS.</h5></strong>
        <strong><h5 style={{float: "right"}}>Coba 1.1</h5></strong>
      </div>
    </div>
  );
}

export default App;
