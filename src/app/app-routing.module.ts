import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from '../app/forms/forms.component';
import {AppComponent} from '../app/app.component';
import {DataComponent} from '../app/data/data.component';
import {TitleComponent} from '../app/title/title.component';
import {SignUpComponent} from '../app/sign-up/sign-up.component';
import {ResultComponent} from '../app/result/result.component';


const routes: Routes = [
  {path:'title',component:TitleComponent},
  {path:'forms', component:FormsComponent},
  {path:'data', component:DataComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'result/:id', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[FormsComponent,AppComponent,TitleComponent,SignUpComponent, ResultComponent];
