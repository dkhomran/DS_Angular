import { Routes } from '@angular/router';
import {ListCandidatComponent} from "./components/list-candidat/list-candidat.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {
    path : "" , component: HomeComponent
  },
  {
    path: "candidat" , component: ListCandidatComponent
  }

];
