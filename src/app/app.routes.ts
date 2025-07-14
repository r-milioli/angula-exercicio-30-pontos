import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalcularQuadradoComponent } from './calcular-quadrado/calcular-quadrado.component';
import { AuthApiComponent } from './auth-api/auth-api.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calcular-quadrado', component: CalcularQuadradoComponent },
  { path: 'auth-api', component: AuthApiComponent },
];
