import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    candidat: any[] = [
      { nom : "Sameh Jaidi" ,prenom : "", proverbe:"يوفى مال الجدّين وما تبقى كان صنعة الليدين"},
      { nom : "Sameh Jaidi" ,prenom : "", proverbe: "يوفى مال الجدّين وما تبقى كان صنعة الليدين"},
      { nom : "Sameh Jaidi" ,prenom : "", proverbe: "يوفى مال الجدّين وما تبقى كان صنعة الليدين"},
      { nom : "Sameh Jaidi" ,prenom : "", proverbe: "يوفى مال الجدّين وما تبقى كان صنعة الليدين"},
      { nom : "Sameh Jaidi" ,prenom : "", proverbe: "يوفى مال الجدّين وما تبقى كان صنعة الليدين"},
    ]
}
