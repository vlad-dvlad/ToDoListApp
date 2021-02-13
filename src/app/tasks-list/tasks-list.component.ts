import { Component, OnInit } from "@angular/core";
import { Task } from "../model/task";
import { ToDoService } from "../service/todo-service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: [ './tasks-list.component.css' ]
})
export class TasksListComponent implements OnInit{
    
    tasks: Task[] = [];
    
    constructor(private todoService: ToDoService){}

    ngOnInit() {
        this.todoService.getAllTasks().subscribe(
            data => {
                this.tasks = data;
            });
    }

}