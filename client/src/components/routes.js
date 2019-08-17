import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./sessions/login";
import Logout from "./sessions/logout";
import Register from "./sessions/register";
import NoteIndex from "./notes/index";
import NoteNew from "./notes/new";
import NoteShow from "./notes/show";
import NoteEdit from "./notes/edit";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/notes" component={NoteIndex} />
      <Route exact path="/notes/:id" component={NoteShow} />
      <Route exact path="/notes/:id/edit" component={NoteEdit} />
      <Route exact path="/notes/new" component={NoteNew} />
    </Switch>
  );
}

export default Routes;