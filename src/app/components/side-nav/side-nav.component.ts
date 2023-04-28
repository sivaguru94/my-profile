import { Component, ElementRef, ViewChild, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements AfterViewInit {

  @ViewChild('sidebar') sidebar!: ElementRef;

  isSideNavExpanded = false;

  ngAfterViewInit(): void {
    if (this.sidebar.nativeElement.offsetWidth > 10) {
      this.isSideNavExpanded = true;
    }
  }

  sidenavToggle() {
    this.isSideNavExpanded = !this.isSideNavExpanded;
  }

}
