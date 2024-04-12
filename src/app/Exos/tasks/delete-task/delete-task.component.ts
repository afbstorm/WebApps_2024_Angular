import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask, TasksService} from "../tasks.service";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.scss'
})
export class DeleteTaskComponent {
  @Input() id!: string;
  @Output() delete: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();
  constructor(private taskService: TasksService) { }


  removeTask(id: string): void {
    this.taskService.removeTask(id);
    this.delete.emit(this.taskService.getTasks())
  }
}
