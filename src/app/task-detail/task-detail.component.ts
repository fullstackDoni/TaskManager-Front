import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../task.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  task: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.getTaskById(taskId).subscribe((task) => {
        this.task = task;
      });
    } else {
      console.error('No task ID provided in the route.');
    }
  }
}
