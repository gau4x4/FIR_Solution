import { Component, OnInit, Input } from '@angular/core';
import { CandidateDetailService } from '../utils/candidate-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  totalCandidate: number = 0;
  selectedCandidate: number = 0;
  rejectedCandidate: number = 0;
  @Input()
  counterData: number[];

  constructor(private candidateService: CandidateDetailService) {}

  ngOnInit(): void {
    this.totalCandidate = this.candidateService.getTotalCandidate();
    this.selectedCandidate = this.candidateService.getNoSelectedCandidate();
    this.rejectedCandidate = this.candidateService.getNoRejectedCandidate();
  }
}
