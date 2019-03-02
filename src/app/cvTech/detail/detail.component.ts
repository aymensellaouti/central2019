import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../../embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private emabaucheService: EmbaucheService
  ) { }

  ngOnInit() {
    this.personne = null;
  }

  embaucher(personne) {
    this.emabaucheService.embaucher(personne);
    console.log(this.emabaucheService.getEmbauches());
  }
}
