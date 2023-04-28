import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { Employee } from 'src/app/modals/employee';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  selectAll = "Select All";
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  subscriptions: Subscription[] = [];

  getInitialDataArray = () => [this.selectAll];

  filterFormData: { value: string; name: string; data: string[]; selected: string }[] = [
    { value: 'department', name: 'Department', data: this.getInitialDataArray(), selected: '' },
    { value: 'roleType', name: 'Role Type', data: this.getInitialDataArray(), selected: '' },
    { value: 'designation', name: 'Designation', data: this.getInitialDataArray(), selected: '' },
    { value: 'experience', name: 'Experience', data: this.getInitialDataArray(), selected: '' },
    { value: 'yearOfJoinning', name: 'Year Of Joinning', data: this.getInitialDataArray(), selected: '' },
    { value: 'location', name: 'Location', data: this.getInitialDataArray(), selected: '' },
    { value: 'team', name: 'Team', data: this.getInitialDataArray(), selected: '' },
  ];

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.api.getEmployes().subscribe((data: Employee[]) => {
      this.employees = this.filteredEmployees = data;
      this.setFilterFormData();
    }));
  }

  setFilterFormData = (): void => {
    this.employees.forEach((employee: Employee) => {
      this.filterFormData[0].data.push(employee.department);
      this.filterFormData[1].data.push(employee.roleType);
      this.filterFormData[2].data.push(employee.designation);
      this.filterFormData[3].data.push(employee.experience);
      this.filterFormData[4].data.push(employee.yearOfJoinning);
      this.filterFormData[5].data.push(employee.location);
      this.filterFormData[6].data.push(employee.team);
    });
    this.filterFormData.forEach(formData => {
      formData.data = [...new Set(formData.data)];
      formData.selected = formData.data[0];
    });
  };

  onSubmit = (): void => {
    this.filterEmployees();
  };

  filterEmployees = (): void => {
    let filteredEmployees: Employee[] = this.employees;
    this.filterFormData.forEach(filterForm => {
      filteredEmployees = filteredEmployees
        .filter((employee: any) => filterForm.selected === this.selectAll ? true : filterForm.selected === employee[filterForm.value]);
    });
    this.filteredEmployees = filteredEmployees;
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  cancel(): void {
    this.filterFormData.forEach(formData => {
      formData.selected = formData.data[0];
    });
  }

  filterBangalore(isBangalore: boolean) {
    this.filterFormData[5].selected = isBangalore ? 'Bangalore' : this.filterFormData[5].data[0];
    this.filterEmployees();
  }

  filterTeam(team: string): void {
    this.filterFormData[6].selected = team;
    this.filterEmployees();
  }

}

