import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [FormsModule, ChildComponent],
  standalone: true,
})
export class ParentComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
