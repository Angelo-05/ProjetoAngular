import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importação dos componentes para conteúdo
import { HomeComponent } from "./views/home/home.component";
import { UsuarioComponent } from "./views/usuario/usuario.component";
import { UsuarioCreateComponent } from "./components/usuario/usuario-create/usuario-create.component";
import { UsuarioDeleteComponent } from "./components/usuario/usuario-delete/usuario-delete.component";
import { UsuarioUpdateComponent } from "./components/usuario/usuario-update/usuario-update.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "usuarios",
    component: UsuarioComponent,
  },
  {
    path: "usuarios/create",
    component: UsuarioCreateComponent,
  },
  {
    path: "usuarios/update/:id",
    component: UsuarioUpdateComponent,
  },
  {
    path: "usuarios/delete/:id",
    component: UsuarioDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
