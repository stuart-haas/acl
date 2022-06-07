import { injectable } from "tsyringe";
import { Authorize } from "../../middleware";
import { PolicyActions } from "../../policies";
import { PostPolicies } from "./policies";

@injectable()
export class PostController {

  @Authorize(
    PostPolicies[PolicyActions.CREATE]
  )
  create(req: any) {
    
  }
}