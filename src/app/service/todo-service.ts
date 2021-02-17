import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Task } from "../model/task";

@Injectable()
export class ToDoService {

    private todoUrl: string;

    constructor(private http: HttpClient){
        this.todoUrl = 'http://localhost:8080/ToDoApp/app/todo/';
    }

    public getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.todoUrl);
    }
    
}
