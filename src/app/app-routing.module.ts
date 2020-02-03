import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './invoice-builder/components/testing/testing.component';


const routes: Routes = [{path: '', redirectTo: '/testing', pathMatch: 'full'},
{path: 'testing', component: TestingComponent},
{path: 'invoice-builder', loadChildren: '../app/invoice-builder/invoice-builder.module#InvoiceBuilderModule'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
