import {UsersModel} from './users.model';

export interface RolesModule{
  roleId: number;
  roleName: string;
  description: string;
  user: UsersModel;
}
export class RoleSearchFromFile {
  roleId: string;
  roleName: string;
  description: string;
 constructor() {
 }
}
export class RoleUpdateFromFile
{
  roleName: string;
  description: string;
  constructor() {
  }
}
