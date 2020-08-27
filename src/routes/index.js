import React from "react";
import { Switch, Route } from 'react-router-dom';

import UsuariosList from '../pages/Usuarios/List';
import UsuarioFormEdit from '../pages/Usuarios/FormEdit';
import UsuarioFormAdd from '../pages/Usuarios/FormAdd';
import AtividadesList from '../pages/Atividades/List';
import AtividadesFormAdd from '../pages/Atividades/FormAdd';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={UsuariosList} />
    <Route path="/usuarios" exact component={UsuariosList} />
    {/* <Route path="/usuarios/:usuario+" component={UsuariosDetails} /> */}
    <Route
      path="/usuarios/:id/edit"
      render={props => <UsuarioFormEdit  {...props} />}
    />
    <Route path="/usuarios/add" exact component={UsuarioFormAdd} />
    <Route path="/atividades" exact component={AtividadesList} />
    <Route path="/atividades/add" exact component={AtividadesFormAdd} />
  </Switch>
)

export default Routes;
