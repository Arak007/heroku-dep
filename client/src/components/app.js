import React from "react";
import MainNav from "./partials/main-nav";
import Routes from "./routes";

export default function App() {
  return (
    <div className="App">
      <Routes />
      <MainNav />
    </div>
  );
}