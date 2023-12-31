import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task(0, '', false);
  title: string = 'Nova Tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.task = this.taskService.getById(parseInt(id)) || new Task(0, '', false);
      this.title = 'Alterando Tarefa';
    }
  }

  onSubmit(){

  }

}
