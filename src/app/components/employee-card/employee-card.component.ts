import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/modals/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee!: Employee;

  max = 5;

  constructor() { }

  ngOnInit() {
  }

}
