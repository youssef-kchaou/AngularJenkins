import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../Model/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
url="http://192.168.50.4:8089/tpfoyer/reservation"
  constructor(private http :HttpClient) { }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/retrieve-all-reservations`);
  }
  ajouterReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.url}/add-reservation`, reservation);
  }
  deleteReservation(id:string){
    return this.http.delete(this.url+`/remove-reservation/${id}`)

  }
  getReservationById(id:string): Observable<Reservation> {
    return this.http.get<Reservation>(this.url+`/retrieve-reservation/${id}`)
  }
  modifyReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.url}/modify-reservation`, reservation);
  }

}
