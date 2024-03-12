import { Component } from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {TaskService} from "../task.service";
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    NgForOf,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  confirmDelete(taskId: string): void {
    if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
      this.deleteTask(taskId);
    }
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(
      response => {
        // Обработка успешного удаления
        console.log('Задача удалена успешно', response);
      },
      error => {
        // Обработка ошибки
        console.error('Произошла ошибка при удалении задачи', error);
      }
    );
  }
}
