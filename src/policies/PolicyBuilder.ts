import { PolicyActions } from ".";

export interface Policies {
  [key: string]: string;
}

export class PolicyBuilder {
  name: string;
  policies: Policies= {};

  constructor(name: string) {
    this.name = name;
  }

  build(...actions: PolicyActions[]) {
    actions.forEach((r: PolicyActions) => {
      this.policies[r] = `${this.name}:${r}`;
    });
    return this;
  }
}