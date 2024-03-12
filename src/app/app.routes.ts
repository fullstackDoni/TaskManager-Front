import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {EditTaskComponent} from "./edit-task/edit-task.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {HttpClientModule} from "@angular/common/http";
import {DeleteTaskComponent} from "./delete-task/delete-task.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  {path: '', redirectTo: '/taskList', pathMatch: 'full'},
  {path: 'taskList', component: TaskListComponent, },
  {path: 'addTask', component: AddTaskComponent, },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'delete-task/:id', component: DeleteTaskComponent, },
  {path: 'task-edit/:id', component: EditTaskComponent , },
  {path: 'task/:id', component: TaskDetailComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
