import { PolicyActions } from ".";

export interface Policies {
  [key: string]: string;
}
export class PolicyBuilder {
  resource: string;
  policies: Policies = {};

  constructor(resource: string) {
    this.resource = resource;
  }

  build(...actions: PolicyActions[]) {
    actions.forEach((r: PolicyActions) => {
      this.policies[r] = `${this.resource}:${r}`;
    });
    return this;
  }
}