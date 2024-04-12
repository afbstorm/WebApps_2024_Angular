import { Injectable } from '@angular/core';

export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: ITask[] = [];

  constructor() { }

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  removeTask(id: string): void {
     this.tasks = this.tasks.filter(task => task.id !== id)
  }

  completeTask(id: string){
    this.tasks = this.tasks.map((task: ITask) => {
      if (task.id === id) {
        return{...task, completed: true}
      }
      return task
    })
  }
}
