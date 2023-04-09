import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  cycle = new FormControl('');
  weight= new FormControl('');
  hair = new FormControl('');
  skin = new FormControl('');
  follicle = new FormControl('');
  follicler = new FormControl('');
 
  constructor() { }

  ngOnInit(): void {
  }

}
