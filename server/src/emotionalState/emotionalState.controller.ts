import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmotionalStateService } from "./emotionalState.service";
import { EmotionalStateControllerBase } from "./base/emotionalState.controller.base";

@swagger.ApiTags("emotionalStates")
@common.Controller("emotionalStates")
export class EmotionalStateController extends EmotionalStateControllerBase {
  constructor(
    protected readonly service: EmotionalStateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
