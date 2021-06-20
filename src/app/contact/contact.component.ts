import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { USERS } from '../users-array';
import { FilterPipe } from '../pipes/filter-pipe';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users: User[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: any;
  value1: any;
  value2: any;
  
  constructor(private userService: UserService) { 
    this.users = this.userService.getUsers();
    this.titleFilter.valueChanges
    .subscribe(
      value => this.filterCriteria = value,
      error => console.log(error)
    )
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
