import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  editTask(taskId: string, task: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${taskId}`, task);
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${taskId}`);
  }

  getTaskById(taskId: string): Observable<any> {
    console.log(`Fetching task with ID: ${taskId}`);
    return this.http.get<any>(`${this.apiUrl}/${taskId}`);
  }

  updateTaskById(taskId: string, taskData: any): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.put<any>(url, taskData);
  }
}

