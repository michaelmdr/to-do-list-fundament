import { Component, OnInit } from '@angular/core';
import { Checkpoint } from 'src/app/interfaces/checkpoint';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  checkpoints: Checkpoint[] = [
    {
      name: 'create your header and style it as you like (header)',
      isChecked: false
    },
    {
      name: 'create two columns with a PENDING and a COMPLETED side (list-container)',
      isChecked: false
    },
    {
      name: 'on top of the PENDING side create an input and a button and add the checklist component here (<app-checklist></app-checklist>)',
      isChecked: false
    },
    {
      name: 'use angular @Input() to bind the checkpoints array with the checklist component',
      isChecked: false
    },
    {
      name: 'create your first for loop (*ngFor) of the checkpoints array over the checklist-item in the template of your checklist (checklist)',
      isChecked: false
    },
    {
      name: 'use angular @Input() to bind the single checkpoint of your checkpoints to the checklist-item.component (checklist-item)',
      isChecked: false
    },
    {
      name: 'add a checkbox, a text and a delete icon to your checklist-item and style it as you like (checklist-item)',
      isChecked: false
    },
    {
      name: 'bind the values isChecked to the checkbox and the name as a text to display them',
      isChecked: false
    },
    {
      name: 'use anuglar @Output() in checklist-item to be able to send events (checked and deleted) to the parent component (checklist)',
      isChecked: false
    },
    {
      name: 'use anuglar @Output() in checklist-item to be able to send events (checked and deleted) to the parent component (checklist)',
      isChecked: false
    },
    {
      name: 'the checklist now needs to react to those events and either switch the isChecked value or delete an item from the list (checklist)',
      isChecked: false
    },
    {
      name: 'now you want to be able to add items to your checklist yourself - go to list-container component and find a way to push an item into the checkpoints array when you click the add button. the name of the checkpoint should have the value of the input',
      isChecked: false
    },
    {
      name: 'now go the list-container component and add a second checklist component (<app-checklist></app-checklist>) to the COMPLETED side',
      isChecked: false
    },
    {
      name: 'find a way to display only not checked items on the PENDING side and checked items on the COMPLETED side',
      isChecked: false
    }
  ];

  newReminderInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  addReminder() {
  }
}
