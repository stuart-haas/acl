import { injectable } from "tsyringe";
import { Authorize } from "../../middleware";
import { JsonResponse } from "../../middleware/Response";
import { PolicyActions } from "../../policies";
import { PostPolicies } from "./policies";

@injectable()
export class PostController {

  @Authorize(
    PostPolicies[PolicyActions.CREATE]
  )
  @JsonResponse()
  create(req: any, res: any) {
    return 'Hello World';
  }
}