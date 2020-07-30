import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidate } from '../utils/Candidate-Interface';
import { CandidateDetailService } from '../utils/candidate-details.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input()
  detail: Candidate;

  @Output()
  select: EventEmitter<Candidate[]> = new EventEmitter<Candidate[]>();

  @Output()
  reject: EventEmitter<Candidate[]> = new EventEmitter<Candidate[]>();

  constructor(private candidateService: CandidateDetailService) {}

  ngOnInit(): void {}

  selectCandidate(id: string) {
    this.select.emit( this.candidateService.dispatchSelectCandidate(id));
  }
  rejectCandidate(id: string) {
    this.reject.emit(this.candidateService.dispatchRejectCandidate(id));
  }
}
