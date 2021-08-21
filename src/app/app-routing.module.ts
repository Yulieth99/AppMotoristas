import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent} from './components/land/land.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StartComponent } from './components/start/start.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersDayComponent } from './components/orders-day/orders-day.component';
import { OrdersTakenComponent } from './components/orders-taken/orders-taken.component';
import { OrderTakenComponent } from './components/order-taken/order-taken.component';
import { OrdersCompletedComponent } from './components/orders-completed/orders-completed.component';
import { OrderCompliteComponent } from './components/order-complite/order-complite.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LandComponent },
  {path: 'register', component: RegisterComponent  },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: StartComponent, canActivate: [AuthGuard] },
  {path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  {path: 'ordersDay', component: OrdersDayComponent, canActivate: [AuthGuard] },
  {path: 'ordersTaken', component: OrdersTakenComponent, canActivate: [AuthGuard] },
  {path: 'orderTaken', component: OrderTakenComponent, canActivate: [AuthGuard] },
  {path: 'ordersCompleted', component: OrdersCompletedComponent, canActivate: [AuthGuard] },
  {path: 'OrderComplite', component: OrderCompliteComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
