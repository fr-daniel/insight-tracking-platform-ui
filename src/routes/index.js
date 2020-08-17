import React from "react";
import { Switch, Route } from 'react-router-dom';

import UsuariosList from '../pages/Usuarios/List';
import UsuarioFormEdit from '../pages/Usuarios/FormEdit';
import UsuarioFormAdd from '../pages/Usuarios/FormAdd';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={UsuariosList} />
    <Route path="/usuarios" exact component={UsuariosList} />
    {/* <Route path="/usuarios/:usuario+" component={UsuariosDetails} /> */}
    <Route path="/usuarios/:id/edit" exact component={UsuarioFormEdit} />
    <Route path="/usuarios/add" exact component={UsuarioFormAdd} />

  </Switch>
)

export default Routes;
