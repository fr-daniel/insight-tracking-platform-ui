import React from "react";
import { Switch, Route } from 'react-router-dom';

import UsuariosList from '../pages/Usuarios/List';
import UsuarioForm from '../pages/Usuarios/Form';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={UsuariosList} />
    <Route path="/usuarios" exact component={UsuariosList} />
    {/* <Route path="/usuarios/:usuario+" component={UsuariosDetails} /> */}
    <Route path="/usuarios/:id/edit" component={UsuarioForm} />
  </Switch>
)

export default Routes;
