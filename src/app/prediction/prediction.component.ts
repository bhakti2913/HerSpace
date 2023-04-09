// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-prediction-form',
//   template: `
//     <form (ngSubmit)="onSubmit()">
//       <label>
//       Cycle(R/I):
//         <input type="number" name="Cycle(R/I)" [(ngModel)]="cycle">
//       </label>
//       <label>
//       Weight gain(Y/N):
//         <input type="number" name="Weight gain(Y/N)" [(ngModel)]="weightg">
//       </label>
//       <label>
//       hair growth(Y/N):
//         <input type="number" name="hair growth(Y/N)" [(ngModel)]="hairg">
//       </label>
//       <label>
//       Skin darkening (Y/N)
//         <input type="number" name="Skin darkening (Y/N)" [(ngModel)]="skind">
//       </label>
//       <label>
//       Follicle No. (L)
//         <input type="number" name="Follicle No. (L)" [(ngModel)]="folliclel">
//       </label>
//       <label>
//       Follicle No. (R)
//         <input type="number" name="Follicle No. (R)" [(ngModel)]="follicler">
//       </label>
//       <button type="submit">Prediction: {{ result }}</button>
//     </form>
//     <div *ngIf="result">
//       <p>Prediction: {{ result }}</p>
//     </div>
//   `
// })


// export class PredictionFormComponent {
//   // constructor(private as: AuthService, private router: Router) {


//   constructor(private http: HttpClient, ) {}
//   cycle!: number;
//   weightg!: number;
//   hairg!: number;
//   skind!: number;
//   folliclel!: number;
//   follicler!: number;
//   result!: string;
//   onSubmit() {
//     const data = {
//       'Cycle(R/I)': this.cycle,
//       'Weight gain(Y/N)': this.weightg,
//       'hair growth(Y/N)': this.hairg,
//       'Skin darkening (Y/N)': this.skind,
//       'Follocle No. (L)': this.folliclel,
//       'Follicle No. (R)': this.follicler
//     };
//     this.http.post('http://127.0.0.1:5000/result', data).subscribe((res: any) => {
//       this.result = res.prediction;
//     });
//   }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-link',
  template: `
    <button (click)="goToExternalUrl()">Get Prediction</button>
  `
})
export class ExternalLinkComponent {

  constructor(private router: Router) {}

  goToExternalUrl() {
    this.router.navigate(['external-url'], { skipLocationChange: true });
    window.location.href = 'http://127.0.0.1:5000';
}

}