import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';
import { Employee } from 'src/app/modals/employee';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  _employees: Employee[] = [];
  get employees(): Employee[] {
    return this._employees;
}

  @Input() set employees(value: Employee[]) {
    this._employees = value;
    this.init();
  }

  @Input() filterFormTeam!: { value: string; name: string; data: string[]; selected: string };

  filteredEmployees: Employee[] = [];
  max = 5;
  isBanglaore = false;
  @Output() filterBangaloreEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() teamFilterEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  init(): void {
    this.filteredEmployees = this.employees;
  }

  ngAfterViewInit(): void {
    console.log(this.employees);
    this.employees = this.filteredEmployees;
  }

  filterBangalore(): void {
    this.filterBangaloreEvent.emit(this.isBanglaore);
  }

  teamSelected():void {
    this.teamFilterEvent.emit(this.filterFormTeam.selected);
  }

}
