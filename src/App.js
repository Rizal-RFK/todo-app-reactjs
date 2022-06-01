import React, { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import CreateToDo from './component/CreateToDo';

function Navbar() {
    return (
      <Fragment>
        <Router>
          <nav class="navbar navbar-expand-sm navbar-light bg-light py-3 px-5">
            <h2 class="mr-5">ToDoApp</h2>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link" href="#"><Link to="/">Home</Link></a>
                <a class="nav-item nav-link" href="#"><Link to="/createtodo">Create To Do</Link></a>
              </div>
            </div>
          </nav>
          <Routes>
          <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/createtodo' element={< CreateToDo />}></Route>
          </Routes>
      </Router>
      </Fragment>
    );
  }

function Home() {
    return (
      <section class="section mt-5">
        <div class="container bg-info p-5">
          <div class="row">
            <div class="col-lg-12">
            <div class="jumbotron p-5">
              <b class="display-2">Hello, World!</b>
              <p class="lead">Previously, let me introduce my name Rizal Rafli, on this occasion I will demonstrate my simple project from "Cooderu Bootcamp" with the name "ToDoApp" without using React-Hook.</p>
              <hr class="my-3" />
              <p>If you want to know the app that I made, please click the button below, please leave a comment, and don't hesitate to give feedback.</p>
              <Link to="/createtodo">
                <button class="btn btn-outline-primary mt-5" >Get Started</button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Navbar;

