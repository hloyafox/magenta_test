import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { USERS } from '../users-array';
import { UserService } from '../user.service';
import { User } from '../user';
import { FilterPipe } from '../pipes/filter-pipe';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: any;
  value1: any;
  value2: any;
  value: any;
  dataFil: FormControl = new FormControl();
  
  constructor(private userService: UserService) { 
    this.users = this.userService.getUsers();
    this.titleFilter.valueChanges
    .subscribe(
      value => this.filterCriteria = value,
      error => console.log(error)
    ); 
 }

  ngOnInit(): void {
    this.getUsers();
    
    
  }
  
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
  
  searchByDate(value1: any, value2: any):  void {
    this.users = this.userService.searchByDate(this.value1, this.value2);

  }
}