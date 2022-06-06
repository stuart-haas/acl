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

export const Policies = [
  {
    id: 1,
    effect: PolicyEffects.ALLOW,
    action: PolicyActions.CREATE,
    resource: Post
  },
  {
    id: 2,
    effect: PolicyEffects.ALLOW,
    action: PolicyActions.CREATE,
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
  }
];