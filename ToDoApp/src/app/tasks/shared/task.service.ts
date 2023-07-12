import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    /*{ id: 1, description: 'Tarefa 1', completed: true },
    { id: 2, description: 'Tarefa 2', completed: false },
    { id: 3, description: 'Tarefa 3', completed: true },
    { id: 4, description: 'Tarefa 4', completed: true },
    { id: 5, description: 'Tarefa 5', completed: false },
    { id: 6, description: 'Tarefa 6', completed: false },
    { id: 7, description: 'Tarefa 7', completed: false },
    { id: 8, description: 'Tarefa 8', completed: true },
    { id: 9, description: 'Tarefa 9', completed: true },
    { id: 10, description: 'Tarefa 10', completed: true }*/
  ]

  constructor() { }

  getAll(){
    return this.tasks;
  }

  getById(id: number){
    const task = this.getAll().find((value) => value.id == id);
    return task;
  }

  save(task: Task){

    if (task.id){

      const taskArr = this.getById(task.id) || new Task(0, '', false);
      taskArr.description = task.description;
      taskArr.completed = task.completed;

    }else{

      const lastId = this.getAll()[this.tasks.length-1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);

    }
  }

  delete(id: number){
    const lastIndex = this.getAll().findIndex((value) => value.id == id);
    this.tasks.splice(lastIndex, 1);
  }
}
