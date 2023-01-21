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
  completedTask: any;
  inProgressedTask: any;
  toggle: boolean = false;
  completed!: boolean;
  inprogressed!: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dailyUpdates = this.formBuilder.group({
      clientName: ['', Validators.required],
      projectName: ['', Validators.required],
      completeTask: this.formBuilder.array([this.completeing()]),
      inProgessTask: this.formBuilder.array([this.inprogressing()]),
    });
  }

  get dailyUpdatesControls() {
    return this.dailyUpdates.controls;
  }
  get completeTasks() {
    return this.dailyUpdates.get('completeTask') as FormArray;
  }
  get inProgressTasks() {
    return this.dailyUpdates.get('inProgessTask') as FormArray;
  }
  private completeing(): FormGroup {
    return new FormGroup({
      completeingTask: new FormControl('', [Validators.required]),
    });
  }
  private inprogressing(): FormGroup {
    return new FormGroup({
      inProgressingTask: new FormControl('', [Validators.required]),
    });
  }
  public onAddTaks(type: string) {
    switch (type) {
      case 'addCompleteTask':
        this.completeTasks.push(this.completeing());
        this.toggle = true;
        this.completed = false;
        break;

      default:
        break;
    }

    console.log(this.completeTasks.value);
  }
  completeTaskValidation(index: number){
    return (this.completedTask = this.completeTasks.controls[
      index
    ] as FormGroup)
  }
  inProgressTaskValidation(index: number) {
    return (this.inProgressedTask = this.inProgressTasks.controls[
      index
    ] as FormGroup);
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
          this.inProgressTasks.removeAt(i);
        } else {
          this.inProgressTasks.reset();
        }
        break;
      default:
        break;
    }
  }
}
