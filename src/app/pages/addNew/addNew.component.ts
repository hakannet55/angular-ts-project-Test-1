import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Form} from '@angular/forms';

@Component({
  selector: 'add-new-form',
  templateUrl: './addNew.component.html',
  styleUrls: ['./addNew.component.css']
})
export class AddNewComponent implements OnInit {
  options:FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {

  }

}
