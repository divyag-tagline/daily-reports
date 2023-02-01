import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss'],
})
export class DailyReportComponent implements OnInit {
  dailyUpdates!: FormGroup;
  toggle: boolean = false;
  completed!: boolean;
  inprogressed!: boolean;
  pendingTasked!: boolean;
  query!: boolean;
  note!: boolean;
  public showMyMessage = false;

  dates = new Date(Date.now()).toISOString().split('T')[0];

  constructor(private formBuilder: FormBuilder) {
    this.dailyUpdates = this.formBuilder.group({
      clientName: ['', Validators.required],
      projectName: ['', Validators.required],
      completeTask: this.formBuilder.array([this.addControl()]),
      inProgressTask: this.formBuilder.array([this.addControl()]),
      pendingTask: this.formBuilder.array([this.addControl()]),
      queries: this.formBuilder.array([this.addControl()]),
      notes: this.formBuilder.array([this.addControl()]),
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get dailyUpdatesControls() {
    return this.dailyUpdates.controls;
  }

  get completeTasks() {
    return this.dailyUpdates.get('completeTask') as FormArray;
  }

  get inProgressTasks() {
    return this.dailyUpdates.get('inProgressTask') as FormArray;
  }

  get pendinged() {
    return this.dailyUpdates.get('pendingTask') as FormArray;
  }

  get quered() {
    return this.dailyUpdates.get('queries') as FormArray;
  }

  get noted() {
    return this.dailyUpdates.get('notes') as FormArray;
  }

  addControl(): FormControl {
    return this.formBuilder.control('', Validators.required);
  }

  public onAddTaks(type: string) {
    switch (type) {
      case 'addCompleteTask':
        if (this.dailyUpdatesControls['completeTask'].invalid) {
          this.completed = true;
          return;
        } else {
          this.completeTasks.push(this.addControl());
          this.toggle = true;
          this.completed = false;
        }
        break;
      case 'addInProgressTask':
        if (this.dailyUpdatesControls['inProgressTask'].invalid) {
          this.inprogressed = true;
          return;
        } else {
          this.inProgressTasks.push(this.addControl());
          this.toggle = true;
          this.inprogressed = false;
        }
        break;
      case 'addPendingTask':
        if (this.dailyUpdatesControls['pendingTask'].invalid) {
          this.pendingTasked = true;
          return;
        } else {
          this.pendinged.push(this.addControl());
          this.toggle = true;
          this.pendingTasked = false;
        }
        break;
      case 'addQueries':
        if (this.dailyUpdatesControls['queries'].invalid) {
          this.query = true;
          return;
        } else {
          this.quered.push(this.addControl());
          this.toggle = true;
          this.query = false;
        }
        break;
      case 'addNote':
        if (this.dailyUpdatesControls['notes'].invalid) {
          this.note = true;
          return;
        } else {
          this.noted.push(this.addControl());
          this.toggle = true;
          this.note = false;
        }
        break;
      default:
        console.error('Something went wrong !');
    }
  }
  public removeOrClearCompletingTask(i: number, type: string) {
    switch (type) {
      case 'addCompleteTask':
        this.completeTasks.removeAt(i);
        break;
      case 'addInProgressTask':
        this.inProgressTasks.removeAt(i);
        break;
      case 'addPendingTask':
        this.pendinged.removeAt(i);
        break;
      case 'addQueries':
        this.quered.removeAt(i);
        break;
      case 'addNote':
        this.noted.removeAt(i);
        break;
      default:
        break;
    }
  }

  copyToClipboard() {
    this.showMyMessage = true
    const copyText = document.getElementById('textCopy') as HTMLElement;
    navigator.clipboard.writeText(copyText.innerText);
    
  }
  hideText(){
    this.showMyMessage = false
  }
}
