import { Reservation } from "./Reservation";


export class Etudiant {
  idEtudiant!: number;
  nomEtudiant!: string;
  prenomEtudiant!: string;
  cinEtudiant!: number;
  dateNaissance!: Date;
  reservations!: Set<Reservation> ;

}
