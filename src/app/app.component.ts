import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { Person } from './interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  people?: Person[];
  ngOnInit(): void {
    this.people = data;
  }
  deletePerson(id: string) {
    this.people = this.people.filter((person) => person.id !== id);
  }
  addPerson(person: Person) {
    console.log(person);
    this.people = [...this.people, person];
  }
}
