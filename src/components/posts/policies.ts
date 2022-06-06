import { Post } from "../../models";
import { PolicyActions, PolicyBuilder } from "../../policies";

const policyBuilder = new PolicyBuilder(Post.name)
  .build(
    PolicyActions.ALL, 
    PolicyActions.GET, 
    PolicyActions.CREATE,
    PolicyActions.UPDATE,
    PolicyActions.DELETE
  );

export const PostPolicies = policyBuilder.policies;

