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
  toggle: boolean = false;
  completed: boolean = false ;
  inprogressed !: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dailyUpdates = this.formBuilder.group({
      clientName: ['', Validators.required],
      projectName: ['', Validators.required],
      completeTask: this.formBuilder.array([this.completeing()]),
      inProgressTask: this.formBuilder.array([this.inProgessing()]),
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
  private completeing(): FormGroup {
    return new FormGroup({
      completeingTask: new FormControl('', [Validators.required]),
    });
  }
  private inProgessing(): FormGroup {
    return new FormGroup({
      inProgressingTask: new FormControl('', [Validators.required]),
    });
  }
  public onAddTaks(type: string,ctr:any) {
    console.log('ctr :>> ', ctr);
    console.log(this.dailyUpdatesControls['completeTask']);
    switch (type) {
      case 'addCompleteTask':
        this.completeTasks.push(this.completeing());
        this.completed = false;
        this.toggle = true;
        break;
      case 'addInProgressTask':
        this.inProgressTasks.push(this.inProgessing());
        this.inprogressed = false;
        this.toggle = true;
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
