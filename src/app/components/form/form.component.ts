import { Component } from '@angular/core';
import { TaskItem } from 'src/app/models/task-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  taskList: TaskItem[] = [];
  taskName: string;
  msgTitle: string;
  msgDescription: string;
  isAllPostponed: boolean = false;

  constructor() {
    this.taskName = '';
    this.msgTitle = 'Intro new task';
    this.msgDescription = 'About your task';
    this.taskList.push(new TaskItem('AppAngular'));
    this.taskList.push(new TaskItem('Create components'));
  }
  addTask(): void {
    if (this.taskName.trim() === '') {
      alert('The task cannot be empty!');
      return;
    }
    
    const item = new TaskItem(this.taskName);
    this.taskList.push(item);
  }
  editTask(task : TaskItem): void {
    const newName = prompt('Edit title the task', task.name);
    if (newName !== null) {
      task.name = newName;
    }
  }
  deleteTask(task : TaskItem): void {
    const delTask = confirm('Are you sure delete your task?')
    if(delTask){
      const i = this.taskList.indexOf(task);
      this.taskList.splice(i, 1);
    } 
  }
  markAllAsPostponed(): void {
    this.taskList.forEach(task => task.isPostponed = true);
    this.isAllPostponed = true;
  }
  restoreAllTasks(): void {
    this.taskList.forEach(task => task.isPostponed = false);
    this.isAllPostponed = false;
  }
  togglePostponed(task: TaskItem): void {
    task.isPostponed = !task.isPostponed;
    this.isAllPostponed = this.taskList.every(task => task.isPostponed);
  }
  deleteAllComplete(): void {
    this.taskList = this.taskList.filter(task => !task.isDone);
  }
}
