import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddReservationComponent } from './AddReservation/add-reservation/add-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
   ReservationListComponent,
   AddReservationComponent,
   EditReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
