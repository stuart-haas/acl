export interface IUser {
  id: number;
  name: string;
  roleId: number;
}

export class User implements IUser {
  id: number;
  name: string;
  roleId: number;

  constructor(model: IUser) {
    this.id = model.id;
    this.name = model.name;
    this.roleId = model.roleId;
  }
}