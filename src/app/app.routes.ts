import { Routes } from '@angular/router';
import {BindingsComponent} from "./Demos/bindings/bindings.component";
import {PipesComponent} from "./Demos/pipes/pipes.component";
import {DirectivesComponent} from "./Demos/directives/directives.component";
import {InoutComponent} from "./Demos/inout/inout.component";
import {ServicesComponent} from "./Demos/services/services.component";
import {FormulairesComponent} from "./Demos/formulaires/formulaires.component";
import {StorageComponent} from "./Demos/storage/storage.component";
import {ObservableComponent} from "./Demos/observable/observable.component";
import {HttpComponent} from "./Demos/http/http.component";
import {ChronoComponent} from "./Exos/chrono/chrono.component";
import {Chronov2Component} from "./Exos/chronov2/chronov2.component";

export const routes: Routes = [
  {path: 'demos', children: [
      {path: 'bindings', component: BindingsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'inout', component: InoutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'formulaires', component: FormulairesComponent},
      {path: 'storage', component: StorageComponent},
      {path: 'observable', component: ObservableComponent},
      {path: 'http', component: HttpComponent}
    ]},
  {path: 'exos', children: [
      {path: 'chrono', component: ChronoComponent},
      {path: 'chronov2', component: Chronov2Component},
    ]}
];
