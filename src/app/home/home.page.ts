import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ITask {
  title: string;
  description: string;
  done: boolean;
  id: number;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title!: FormControl;
  public description!: FormControl;
  public done!: FormControl;

  public taskForm!: FormGroup;

  public tasks: ITask[] = [];


  constructor() {
    this.initForm();
  }

  public addTask() {
    console.log(this.taskForm.value);
    this.tasks.push({ ...this.taskForm.value, done: false }); //
    console.log(this.tasks);
    this.taskForm.reset();

  }

  updateTaskStatus(task: { done: any; }, event: { detail: { checked: any; }; }) {
    task.done = event.detail.checked;

  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  private initForm() {
    this.title = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.description = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.done = new FormControl(false, []);

    this.taskForm = new FormGroup({
      title: this.title,
      description: this.description,
      done: this.done,
    });


  }
}
