import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimesIcon = faTimes;

  @Output() taskItem: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onTaskDelete(task: Task): void {
    // console.log('Item to be deleted: ', id);

    this.taskItem.emit(task);
  }

  onToggle(task: Task): any {
    this.toggleReminder.emit(task);
  }
}
