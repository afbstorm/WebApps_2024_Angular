import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ITask, TasksService} from "../tasks.service";
import {DeleteTaskComponent} from "../delete-task/delete-task.component";
import {UpdateTaskComponent} from "../update-task/update-task.component";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [
    DeleteTaskComponent,
    UpdateTaskComponent,
    CardModule
  ],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit {

  tasks: ITask[] = [];

  constructor(private _taskService: TasksService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.tasks = this._taskService.getTasks();
  }
}
