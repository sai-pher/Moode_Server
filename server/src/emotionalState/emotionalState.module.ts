import { Module } from "@nestjs/common";
import { EmotionalStateModuleBase } from "./base/emotionalState.module.base";
import { EmotionalStateService } from "./emotionalState.service";
import { EmotionalStateController } from "./emotionalState.controller";
import { EmotionalStateResolver } from "./emotionalState.resolver";

@Module({
  imports: [EmotionalStateModuleBase],
  controllers: [EmotionalStateController],
  providers: [EmotionalStateService, EmotionalStateResolver],
  exports: [EmotionalStateService],
})
export class EmotionalStateModule {}
