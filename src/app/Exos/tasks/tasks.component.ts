import { Component } from '@angular/core';
import {ListTaskComponent} from "./list-task/list-task.component";
import {AddTaskComponent} from "./add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    ListTaskComponent,
    AddTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
