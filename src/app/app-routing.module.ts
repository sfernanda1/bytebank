import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Routes } from '@angular/router';
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

export const routes: Routes = [
  {path:'', redirectTo:'extrato', pathMatch:'full'},
  {path:'extrato', component:ExtratoComponent},
  {path:'nova-transferencia', component:NovaTransferenciaComponent},
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
//forRoot diz que para o módulo principal a rota é essa

export class AppRoutingModule{}

// Foi criado um objeto de rota e o array de rota, importado o módulo routermodulo,
//utiliza-se do método estático forRoot, e passa o array de rotas.
