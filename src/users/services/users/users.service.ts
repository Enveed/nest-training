import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Rith', email: 'rith@gmail.com' },
    { username: 'With', email: 'with@gmail.com' },
    { username: 'Paul', email: 'paul@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return {};
  }

  fetchUserById(id: number) {
    return { id, username: 'Aaron', email: 'aaron@gmail.com' };
  }
}
