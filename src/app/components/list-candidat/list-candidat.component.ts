import {Component, OnInit} from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {Candidat} from "../../common/Condidat";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list-candidat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-candidat.component.html',
  styleUrl: './list-candidat.component.css'
})
export class ListCandidatComponent implements OnInit {


  candidats : Candidat[] = []

  constructor(private candidatServise : CandidatService) {
  }

  fetchCondidat() {
    this.candidatServise.getCandidat().subscribe(
      (res : any) => {
        this.candidats = res._embedded.candidat;
      }
    )
  }

  ngOnInit() {
    this.fetchCondidat();
  }
}
