import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
// import { MockTasks } from '../../mock-tasks';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  listOfTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.listOfTasks = MockTasks;
    // this.listOfTasks = this.taskService.getTasks();

    this.taskService
      .getTasks()
      .subscribe((tasks) => (this.listOfTasks = tasks));
  }

  onDeleteTaskItem(task: Task): void {
    // console.log('Task deleting ... ', task);

    this.taskService
      .deleteTask(task)
      .subscribe(
        () =>
          (this.listOfTasks = this.listOfTasks.filter(
            (ts) => ts.id !== task.id
          ))
      );
  }

  onToggleReminder(task: Task): any {
    task.reminder = !task.reminder;

    this.taskService.toggleReminder(task).subscribe();
  }

  onAddTask(task: any): any {
    // console.log('Where is my task: ', task);
    this.taskService.addTask(task).subscribe((ts) => this.listOfTasks.push(ts));
  }
}
