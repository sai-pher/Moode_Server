import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmotionalStateServiceBase } from "./base/emotionalState.service.base";

@Injectable()
export class EmotionalStateService extends EmotionalStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
