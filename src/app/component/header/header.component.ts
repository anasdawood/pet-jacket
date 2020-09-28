import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  userName: string;
  providerName: string;

  notificationIconClasses = "mat-icon-button mat-button-base ";

  constructor() {
 
  }


  ngOnInit() {

  }

}
