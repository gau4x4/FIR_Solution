import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gen-modal',
  templateUrl: './gen-modal.component.html',
  styleUrls: ['./gen-modal.component.scss']
})
export class GenModalComponent implements OnInit {

  constructor(public dialogeRef:MatDialogRef<GenModalComponent>) { }

  ngOnInit(): void {
  }

  onClose(msg){
    this.dialogeRef.close(msg);
  }
}
