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
  completedTask : any
  toggle: boolean = false;
  subbmitted!: boolean;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dailyUpdates = this.formBuilder.group({
      clientName: ['', Validators.required],
      projectName: ['', Validators.required],
      completeTask: this.formBuilder.array([this.completeing()]),
    });
  }
  
  get dailyUpdatesControls() {
    return this.dailyUpdates.controls;
  }
  get completeTasks() {
    return this.dailyUpdates.get('completeTask') as FormArray;
  }
  private completeing(): FormGroup {
    return new FormGroup({
      completeingTask: new FormControl('', [Validators.required]),
    });
  }
  public onAddTaks() {
    this.completeTasks.push(this.completeing());
    this.toggle = true;
    this.subbmitted = false
    console.log(this.completeTasks.value);
  }
  completeTaskValidation(index:number) {
    this.completedTask = this.completeTasks; 
    const formGroup = this.completedTask.controls[index] as FormGroup;
    return formGroup;
  }
  public removeOrClearCompletingTask(i: number) {
    if (this.completeTasks.length > 1) {
      this.completeTasks.removeAt(i)
    } else {
      this.completeTasks.reset()
    }
  }
}
