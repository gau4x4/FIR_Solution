import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { CandidateModalComponent } from '../candidate-modal/candidate-modal.component';
import { Candidate } from '../utils/Candidate-Interface';
import { CandidateDetailService } from '../utils/candidate-details.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  candidates: Candidate[];

  @Output() counter = new EventEmitter<number[]>();

  constructor(
    public dialog: MatDialog,
    private candidateService: CandidateDetailService
  ) {}

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidateDetails();
  }

  openAddCandidateDialog(): void {
    const dialogRef = this.dialog.open(CandidateModalComponent, {
      width: '550px',
      data: {},
      panelClass: 'add-candidate-parent',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Observable;
      console.log('The dialog was closed', result);

      this.counter.emit([
        this.candidateService.getTotalCandidate(),
        this.candidateService.getNoSelectedCandidate(),
        this.candidateService.getNoRejectedCandidate(),
      ]);
    });
  }
  onUpdateHandler(event: Candidate[]) {
    this.candidates = event;
    this.counter.emit([
      this.candidateService.getTotalCandidate(),
      this.candidateService.getNoSelectedCandidate(),
      this.candidateService.getNoRejectedCandidate(),
    ]);
  }

  searchCandidateHandler(searchKey) {
    if (searchKey) {
      this.candidates = this.candidates.filter((item) => {
        if (
          item.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.gender.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.location.toLowerCase().includes(searchKey.toLowerCase())
        )
          return item;
      });
    } else {
      this.candidates = this.candidateService.getCandidateDetails();
    }
  }
}
