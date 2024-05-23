export interface ApiResponse<T> {
  _embedded : {
    candidat : Candidat []
  }
}


export interface Candidat {
  nom : string;
  prenom : string;
  proverbe: string;
}
