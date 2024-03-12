import {Component, OnInit} from '@angular/core';
import {TaskService, Task} from '../task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatSlideToggle,
    FormsModule,
    CommonModule
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  taskId: string | undefined;
  title: string | undefined;
  description: string | undefined;
  status: boolean | undefined;
  task: Task | undefined;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.getTaskById(taskId).subscribe({
        next: (task: Task) => {
          this.task = task;
        },
        error: (error) => {
          console.error('Error fetching Task details', error);
        }
      });
    } else {
      console.error('No Task ID provided in the route.');
    }
  }


  saveTask(): void {
    console.log('front', this.task);
    if (this.task && this.task._id) {
      const updatedTask: Task = {
        _id: this.task._id,
        title: this.title || this.task.title,
        description: this.description || this.task.description,
        status: this.status !== undefined ? this.status : this.task.status
      };
      console.log('front2');

      this.taskService.updateTaskById(this.task._id, updatedTask).subscribe({
        next: () => {
          window.alert('Task updated successfully');
          this.router.navigate(['/taskList']);
        },
        error: (error) => console.error(error)
      });
    }
  }


  cancel(): void {
    console.log("Canceled");
    // Отмена изменений и переход обратно к списку задач
    this.router.navigate(['/tasks']);
  }

}
