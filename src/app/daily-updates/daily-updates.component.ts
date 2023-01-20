import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.scss'],
})
export class DailyUpdatesComponent implements OnInit {
  dailyUpdates!: FormGroup;
  completeTask!: FormArray;
  completedTask!: FormGroup;
  inProgressedTask!: FormGroup;
  pendingTasks!: FormGroup;
  queredTask!: FormGroup;
  notedTask!: FormGroup;
  toggle: boolean = false;
  completed!: boolean;
  inprogressed!: boolean;
  pendingTasked!: boolean;
  query!: boolean;
  note!: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dailyUpdates = this.formBuilder.group({
      clientName: ['', Validators.required],
      projectName: ['', Validators.required],
      completeTask: this.formBuilder.array([this.completeing()]),
      inProgressTask: this.formBuilder.array([this.inProgressing()]),
      pendingTask: this.formBuilder.array([this.pending()]),
      queries: this.formBuilder.array([this.quering()]),
      notes: this.formBuilder.array([this.noteing()]),
      name: ['', Validators.required],
    });
  }

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
  private completeing(): FormGroup {
    return new FormGroup({
      completeingTask: new FormControl('', [Validators.required]),
    });
  }
  private inProgressing(): FormGroup {
    return new FormGroup({
      inProgressingTask: new FormControl('', [Validators.required]),
    });
  }
  private pending(): FormGroup {
    return new FormGroup({
      pendingTasking: new FormControl('', [Validators.required]),
    });
  }
  private quering(): FormGroup {
    return new FormGroup({
      queriesTask: new FormControl('', [Validators.required]),
    });
  }
  private noteing(): FormGroup {
    return new FormGroup({
      noteTask: new FormControl('', [Validators.required]),
    });
  }
  public onAddTaks(type: string) {
    switch (type) {
      case 'addCompleteTask':
        this.completeTasks.push(this.completeing());
        this.toggle = true;
        this.completed = false;
        break;
      case 'addInProgressTask':
        this.inProgressTasks.push(this.inProgressing());
        this.toggle = true;
        this.inprogressed = false;
        break;
      case 'addPendingTask':
        this.pendinged.push(this.pending());
        this.toggle = true;
        this.pendingTasked = false;
        break;
      case 'addQueries':
        this.quered.push(this.quering());
        this.toggle = true;
        this.query = false;
        break;
      case 'addNote':
        this.noted.push(this.noteing());
        
        this.note = false;
        break;
      default:
        break;
    }
    
  }
  completeTaskValidation(index: number) {
    return (this.completedTask = this.completeTasks.controls[
      index
    ] as FormGroup);
  }
  inProgressTaskValidation(index: number) {
    return (this.inProgressedTask = this.inProgressTasks.controls[
      index
    ] as FormGroup);
  }
  pendingTaskValidation(index: number) {
    return (this.pendingTasks = this.pendinged.controls[index] as FormGroup);
  }
  queriesValidation(index: number) {
    return (this.queredTask = this.quered.controls[index] as FormGroup);
  }
  noteValidation(index: number) {
    return (this.notedTask = this.noted.controls[index] as FormGroup);
  }
  public removeOrClearCompletingTask(i: number, type: string) {
    switch (type) {
      case 'addCompleteTask':
        if (this.completeTasks.length > 1) {
          this.completeTasks.removeAt(i);
        } else {
          this.completeTasks.reset();
        }
        break;
      case 'addInProgressTask':
        if (this.inProgressTasks.length > 1) {
        } else {
          this.inProgressTasks.removeAt(i);
          this.inProgressTasks.reset();
        }
        break;
      case 'addPendingTask':
        if (this.pendinged.length > 1) {
          this.pendinged.removeAt(i);
        } else {
          this.pendinged.reset();
        }
        break;
      case 'addQueries':
        if (this.quered.length > 1) {
          this.quered.removeAt(i);
        } else {
          this.quered.reset();
        }
        break;
      case 'addNote':
        if (this.noted.length > 1) {
          this.noted.removeAt(i);
        } else {
          this.noted.reset();
        }
        break;
      default:
        break;
    }
  }
}
