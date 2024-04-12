import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ITask, TasksService } from "../tasks.service";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent {
  @Input() id!: string;
  @Output() complete: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();

  constructor(private taskService: TasksService) { }


  completeTask(id: string): void {
    this.taskService.completeTask(id);
    this.complete.emit(this.taskService.getTasks())
  }
}
