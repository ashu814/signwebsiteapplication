import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent} from './component/home/home.component';
import { LoginComponent } from './component/authenticate/login/login.component';
import { RegisterComponent } from './component/authenticate/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { ServicesComponent } from './component/services/services.component';

const routes :Routes = [
{path: '', redirectTo:'/home',pathMatch:'full'},
{path: 'home', component:HomeComponent},
{path: 'login', component:LoginComponent },
{path: 'register', component:RegisterComponent },
{path: 'contact', component:ContactComponent},
{path: 'blog', component:BlogComponent},
{path: 'services', component:ServicesComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	CommonModule 
	],
	exports:[RouterModule],
	declarations: []
})
export class AppRoutingModule { }


