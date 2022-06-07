import { Post } from "../models";
export * from './PolicyBuilder';

export enum PolicyEffects {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

export enum PolicyActions {
  ALL = '*',
  GET = 'GET',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

export interface Policy {
  id: number;
  effect: PolicyEffects,
  action: PolicyActions,
  resource: object;
}

export const Policies: Policy[] = [
  {
    id: 1,
    effect: PolicyEffects.ALLOW,
    action: PolicyActions.GET,
    resource: Post
  },
  {
    id: 2,
    effect: PolicyEffects.ALLOW,
    action: PolicyActions.CREATE,
    resource: Post
  },
  {
    id: 3,
    effect: PolicyEffects.ALLOW,
    action: PolicyActions.UPDATE,
    resource: Post
  },
  {
    id: 4,
    effect: PolicyEffects.ALLOW,
    action: PolicyActions.DELETE,
    resource: Post
  }
];

export const RolePolicies = [
  {
    roleId: 1,
    policyId: 1,
  }
];

export const UserPolicies = [
  {
    userId: 1,
    policyId: 2,
  },
  {
    userId: 1,
    policyId: 3,
  },
  {
    userId: 1,
    policyId: 4,
  }
];