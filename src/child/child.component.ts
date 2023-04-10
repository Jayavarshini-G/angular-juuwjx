import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  imports:[ParentComponent]
})
export class ChildComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
