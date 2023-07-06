import { Component, OnInit } from '@angular/core';
import { Checkpoint } from 'src/app/interfaces/checkpoint';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(checkpoint: Checkpoint) {
  }

  deleteCheckpoint(checkpoint: Checkpoint) {
  }
}
