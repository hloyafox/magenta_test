import { Injectable, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { User } from './user';
import { USERS } from './users-array';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  value2: any;
  value1: any;
  user: any;

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
  
  searchByDate(value1: any, value2: any): User[] {
    let dateFrom = value1,
        dateTo = value2,
        df = Date.parse(dateFrom),
        dt = Date.parse(dateTo);
    console.log(df);
    if (!dateFrom && !dateTo) {
      return USERS;
    } else if (dateFrom && !dateTo ) {
      
     return USERS.filter(user => Date.parse(user.birth) >= df);
      
    } else if (!dateFrom && dateTo) {
      return USERS.filter(user => Date.parse(user.birth) <= dt);
    } else {
      return USERS.filter(user => Date.parse(user.birth) <= dt && Date.parse(user.birth) >= df);
    }
  }
    
} 
