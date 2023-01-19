import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.scss'],
})
export class DailyUpdatesComponent implements OnInit {
  dailyUpdates!: FormGroup;
  complateTask!: FormArray;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dailyUpdates = this.formBuilder.group({
      clientName: ['', Validators.required],
      projectName: ['', Validators.required],
      complateTask: this.formBuilder.array([this.formBuilder.control('')]),
    });
    console.log(this.dailyUpdates.controls);
  }

  get dailyUpdatesControls() {
    return this.dailyUpdates.controls;
  }
  get completeTasks() {
    return this.dailyUpdates.get('complateTask') as FormArray;
  }
  onAddTaks() {
    this.completeTasks.push(this.formBuilder.control(''));
  }
}
