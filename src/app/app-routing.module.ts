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

const routes: Routes = [
  {path: '', component: LandComponent },
  {path: 'register', component: RegisterComponent  },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: StartComponent },
  {path: 'order', component: OrderComponent },
  {path: 'ordersDay', component: OrdersDayComponent },
  {path: 'ordersTaken', component: OrdersTakenComponent },
  {path: 'orderTaken', component: OrderTakenComponent },
  {path: 'ordersCompleted', component: OrdersCompletedComponent },
  {path: 'OrderComplite', component: OrderCompliteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
