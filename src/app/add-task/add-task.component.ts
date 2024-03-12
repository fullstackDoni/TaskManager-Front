import {Component, signal} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatOption} from "@angular/material/autocomplete";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {TaskService} from "../task.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    MatFormField,
    MatCheckbox,
    MatSlideToggle,
    MatInput,
    MatInputModule,
    MatCardTitle,
    MatCardContent,
    MatOption,
    MatFormFieldModule,
    MatButton,
    FormsModule,
    NgIf
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  tasks: string[] = [];
  task: any = {};
  constructor(private taskService: TaskService, private router: Router) {}

  saveTask(): void {
    if (this.task) {
      this.taskService.addTask(this.task).subscribe({
        next: () => {
          window.alert('Task added successfully');
          this.router.navigate(['/taskList']);
        },
        error: (error) => console.error(error)
      });
    }
  }
}
