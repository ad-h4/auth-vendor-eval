import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userfront from '@userfront/react';

Userfront.init("tenant_id");

const SignupForm = Userfront.build({
  toolId: "toolid"
});

const LoginForm = Userfront.build({
  toolId: "toolid"
});

const LogoutButton = Userfront.build({
  toolId: "toolid"
});

const PasswordResetForm = Userfront.build({
  toolId: "toolid"
});

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset">
            <PasswordReset />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
  <div>
    <h2>Home</h2>
    <SignupForm />
  </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
    );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
    );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <LogoutButton />
    </div>
    );
  }
