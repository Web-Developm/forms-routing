import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from '../app/forms/forms.component';
import {AppComponent} from '../app/app.component';
import {DataComponent} from '../app/data/data.component';
import {TitleComponent} from '../app/title/title.component';

const routes: Routes = [
  {path:'title',component:TitleComponent},
  {path:'forms', component:FormsComponent},
  {path:'data', component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[FormsComponent,AppComponent,TitleComponent];
