import { Authorize } from "../../middleware";
import { PolicyActions } from "../../policies";
import { PostPolicies } from "./policies";

export class PostController {

  @Authorize(
    PostPolicies[PolicyActions.CREATE]
  )
  create(req: any) {
    
  }
}