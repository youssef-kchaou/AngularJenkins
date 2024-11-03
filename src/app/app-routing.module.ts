import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AddReservationComponent } from './AddReservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

const routes: Routes = [
  { path: 'reservations', component: ReservationListComponent },
  { path: 'add-reservation', component: AddReservationComponent },
  { path: 'edit-reservation/:id', component: EditReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
