import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  @Output() addPeople = new EventEmitter();
  personForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personForm = this.fb.group({ id: '', firstName: '', lastName: '' });
  }
  addPerson() {
    console.log(this.personForm.value);
    this.addPeople.emit(this.personForm.value);
  }
}
