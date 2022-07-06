import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Output() deleteMe = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  deletePerson(id: string) {
    this.deleteMe.emit(id);
  }
}
