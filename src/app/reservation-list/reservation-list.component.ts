import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Model/Reservation';
import { ReservationServiceService } from '../Services/reservation-service.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {
  reservation!: Reservation [];

  constructor(private reservationservice: ReservationServiceService,
              private router:Router
  ) {}

  ngOnInit() {
    this.reservationservice.getAllReservations().subscribe((data) => {
      this.reservation = data;
    }, error => {
      console.error('Error fetching projects', error);
      
    });
}
editReservation(reservation: any) {
  // Redirige vers la page de modification, en passant l'ID de la réservation
  this.router.navigate(['/edit-reservation', reservation.idReservation]);
}

deleteReservation(projectId: string): void {
  this.reservationservice.deleteReservation(projectId).subscribe(
    response => {
      this.ngOnInit(); // Reload projects after deletion
    },
    error => {
      console.error('Error deleting project', error);
    }
  );
}

}
