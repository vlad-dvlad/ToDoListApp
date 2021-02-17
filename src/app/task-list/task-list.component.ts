import { Component, OnInit } from "@angular/core";
import { Task } from "../model/task";
import { ToDoService } from "../service/todo-service";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: [ './task-list.component.css' ]
})
export class TaskListComponent implements OnInit{

    tasks: Task[] = [];

    constructor(private todoService: ToDoService){}
   
    ngOnInit() {
        this.todoService.getAllTasks().subscribe(
            data => {
                this.tasks = data;
            });
    }
}