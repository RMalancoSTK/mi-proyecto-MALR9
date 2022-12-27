import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoute: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            pageTitle: 'Bienvenidos'
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(loginRoute)],
    exports: [RouterModule]
})

export class LoginRouteModule {}