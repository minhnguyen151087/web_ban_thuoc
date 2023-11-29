import { User } from './users.model';

export interface RolesModule {
  roleId: number;
  roleName: string;
  description: string;
  user: User;
}


