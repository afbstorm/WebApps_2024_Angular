import { Component } from '@angular/core';
import { v4 as uuivd4} from 'uuid';
import {ITask, TasksService} from "../tasks.service";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  newTask: ITask = {
    id: uuivd4(),
    title: '',
    description: '',
    completed: false
  }

  constructor(private taskService: TasksService) { }

  addTask(): void {
    if (this.newTask) {
      this.taskService.addTask(this.newTask);
      this.taskService.getTasks();
      this.newTask = {
        id: uuivd4(),
        title: '',
        description: '',
        completed: false
      };
    }
  }
}
