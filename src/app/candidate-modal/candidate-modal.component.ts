import { Component, OnInit } from '@angular/core';
import { Candidate } from '../utils/Candidate-Interface';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CandidateDetailService } from '../utils/candidate-details.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { GenModalComponent } from '../gen-modal/gen-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-candidate-modal',
  templateUrl: './candidate-modal.component.html',
  styleUrls: ['./candidate-modal.component.scss'],
})
export class CandidateModalComponent implements OnInit {
  candidate: Candidate;

  candidateForm: FormGroup;
  // candiSkills: string[];

  constructor(
    private candidateService: CandidateDetailService,
    public dialog: MatDialogRef<CandidateModalComponent>,
    public dialogeAccept: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.candidateForm = new FormGroup({
      candidateName: new FormControl(''),
      candidateLocation: new FormControl(''),
      gender: new FormControl(''),
      cs: new FormControl(''),
      mvc: new FormControl(''),
      angjs: new FormControl(''),
      anglr: new FormControl(''),
      react: new FormControl(''),
    });
  }

  saveCandidateHandler(eventdata: FormGroup) {
    console.log(eventdata.value);
  }
  onSubmit(form: FormGroup) {
    let skillString =
      (form.value.cs ? 'C#,' : '') +
      (form.value.mvc ? 'ASP.NET MVC,' : '') +
      (form.value.angjs ? 'AngularJS,' : '') +
      (form.value.anglr ? 'Angular 2/4/5,' : '') +
      (form.value.react ? 'ReactJS' : '');

    if (form.valid) {
      this.candidate = {
        id:
          form.value.candidateName +
          form.value.candidateLocation +
          Math.floor(Math.random() * 10000 + 1),
        name: form.value.candidateName,
        location: form.value.candidateLocation,
        gender: form.value.gender,
        status: 'interview',
        skills: skillString.replace(/,\s*$/, '').split(','),
        actions: ['select', 'reject'],
      };
      this.candidateService.addCandidate(this.candidate);
      this.dialog.close();
      this.openSnackBar(form.value.candidateName);
    }
  }
  openSnackBar(candidateName: String) {
    this._snackBar.open(
      'Candidate "' + candidateName + '" Added Successfully.',
      '',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      }
    );
  }
  dirtySubmit(candiForm: FormGroup) {
    if (candiForm.dirty) {
      const dialogRef = this.dialogeAccept.open(GenModalComponent, {
        width: '350px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result === 'no') {
          this.dialog.close();
        } 
      });
    } else {
      
      this.dialog.close(true);
    }
  }
}
