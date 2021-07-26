import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartComponent } from './components/start/start.component';
import { OrdersDayComponent } from './components/orders-day/orders-day.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { OrdersTakenComponent } from './components/orders-taken/orders-taken.component';
import { OrderTakenComponent } from './components/order-taken/order-taken.component';
import { OrdersCompletedComponent } from './components/orders-completed/orders-completed.component';
import { LandComponent } from './components/land/land.component';
import { OrderCompliteComponent } from './components/order-complite/order-complite.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    OrdersDayComponent,
    OrderComponent,
    LoginComponent,
    RegisterComponent,
    RequirementsComponent,
    OrdersTakenComponent,
    OrderTakenComponent,
    OrdersCompletedComponent,
    LandComponent,
    OrderCompliteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
