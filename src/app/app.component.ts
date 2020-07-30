import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counterDataArr = [];
  title = 'CandidateDashboard';
  counterHandler(eventData: any) {
    this.counterDataArr = [...eventData];
  }
  
}
