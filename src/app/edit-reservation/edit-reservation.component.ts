import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationServiceService } from '../Services/reservation-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../Model/Reservation';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrl: './edit-reservation.component.css'
})
export class EditReservationComponent implements OnInit{
  ReservationF: FormGroup;
  reservationId: any; // Pour stocker l'ID de la réservation

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationServiceService
  ) {
    this.ReservationF = this.fb.group({
      anneeUniversitaire: ['', Validators.required],
      estValide: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID de l'URL
    this.loadReservation();
  }

  loadReservation() {
    this.reservationService.getReservationById(this.reservationId).subscribe((reservation: Reservation) => {
      this.ReservationF.patchValue({
        anneeUniversitaire: reservation.anneeUniversitaire,
        estValide: reservation.estValide
      });
    });
  }

  onSubmit() {
    if (this.ReservationF.valid) {
      const updatedReservation: Reservation = {
        idReservation: this.reservationId, // Ajouter l'ID
        ...this.ReservationF.value
      };

      this.reservationService.modifyReservation(updatedReservation).subscribe(() => {
        this.router.navigate(['/reservations']); // Rediriger vers la liste des réservations
      });
    }
  }
}
