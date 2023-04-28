import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Employee } from 'src/app/modals/employee';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];

  @Input() 
  filterFormData: { value: string; name: String; data: string[]}[] = [];

  constructor() {}

  ngOnInit(): void {}

}
