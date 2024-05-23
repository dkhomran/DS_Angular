import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse, Candidat} from "../common/Condidat";

@Injectable({
  providedIn: 'root'
})
export class CandidatService  {

  private  BASE_URL = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }


  getCandidat(): Observable<ApiResponse<Candidat[]>> {
    return this.http.get<ApiResponse<Candidat[]>>(this.BASE_URL + "/candidat");
  }
}
