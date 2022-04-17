import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmotionalStateResolverBase } from "./base/emotionalState.resolver.base";
import { EmotionalState } from "./base/EmotionalState";
import { EmotionalStateService } from "./emotionalState.service";

@graphql.Resolver(() => EmotionalState)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmotionalStateResolver extends EmotionalStateResolverBase {
  constructor(
    protected readonly service: EmotionalStateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
