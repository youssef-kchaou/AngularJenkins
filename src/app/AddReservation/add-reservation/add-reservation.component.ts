import { Component, OnInit } from '@angular/core';
import { ReservationServiceService } from '../../Services/reservation-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent implements OnInit{
  ReservationF: FormGroup;
  constructor(private reservationservice: ReservationServiceService,private router: Router,
    private fb: FormBuilder) {

      this.ReservationF = this.fb.group({
        idReservation:['', Validators.required],
        anneeUniversitaire: ['', Validators.required],
        estValide: ['', Validators.required],
  
      });
    }

  ngOnInit():void{

}

addReservation(): void {
  if (this.ReservationF.valid) {
    this.reservationservice.ajouterReservation(this.ReservationF.value).subscribe(
      response => {
      
        console.log('reservation added successfully', response);
        this.router.navigate(['/reseravtions']);
      },
      error => {
        console.log('Project added error');
      }
    );
  } else {
    console.log('Form is not valid');
  }
}
}
