import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/pages/contact/AddContact";
import EditContact from "./components/pages/contact/EditContact";
import ContactList from "./components/pages/contact/ContactList";

const App = () => {
  return (
    <div className="theme-light container">
      <Router>
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/contacts" component={ContactList} />
          <Route path="/add-contact" component={AddContact} />
          <Route path="/edit-contact/:id" component={EditContact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
