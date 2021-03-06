/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmotionalStateService } from "../emotionalState.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmotionalStateCreateInput } from "./EmotionalStateCreateInput";
import { EmotionalStateWhereInput } from "./EmotionalStateWhereInput";
import { EmotionalStateWhereUniqueInput } from "./EmotionalStateWhereUniqueInput";
import { EmotionalStateFindManyArgs } from "./EmotionalStateFindManyArgs";
import { EmotionalStateUpdateInput } from "./EmotionalStateUpdateInput";
import { EmotionalState } from "./EmotionalState";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmotionalStateControllerBase {
  constructor(
    protected readonly service: EmotionalStateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "EmotionalState",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmotionalState })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: EmotionalStateCreateInput
  ): Promise<EmotionalState> {
    return await this.service.create({
      data: {
        ...data,

        users: data.users
          ? {
              connect: data.users,
            }
          : undefined,
      },
      select: {
        anxiety: true,
        coping: true,
        createdAt: true,
        feeling: true,
        harm: true,
        id: true,
        medication: true,
        productivity: true,
        sleep: true,
        stress: true,
        suicide: true,
        updatedAt: true,
        upTo: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "EmotionalState",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [EmotionalState] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(EmotionalStateFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<EmotionalState[]> {
    const args = plainToClass(EmotionalStateFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        anxiety: true,
        coping: true,
        createdAt: true,
        feeling: true,
        harm: true,
        id: true,
        medication: true,
        productivity: true,
        sleep: true,
        stress: true,
        suicide: true,
        updatedAt: true,
        upTo: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "EmotionalState",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmotionalState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: EmotionalStateWhereUniqueInput
  ): Promise<EmotionalState | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        anxiety: true,
        coping: true,
        createdAt: true,
        feeling: true,
        harm: true,
        id: true,
        medication: true,
        productivity: true,
        sleep: true,
        stress: true,
        suicide: true,
        updatedAt: true,
        upTo: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "EmotionalState",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmotionalState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: EmotionalStateWhereUniqueInput,
    @common.Body() data: EmotionalStateUpdateInput
  ): Promise<EmotionalState | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          users: data.users
            ? {
                connect: data.users,
              }
            : undefined,
        },
        select: {
          anxiety: true,
          coping: true,
          createdAt: true,
          feeling: true,
          harm: true,
          id: true,
          medication: true,
          productivity: true,
          sleep: true,
          stress: true,
          suicide: true,
          updatedAt: true,
          upTo: true,

          users: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "EmotionalState",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmotionalState })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: EmotionalStateWhereUniqueInput
  ): Promise<EmotionalState | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          anxiety: true,
          coping: true,
          createdAt: true,
          feeling: true,
          harm: true,
          id: true,
          medication: true,
          productivity: true,
          sleep: true,
          stress: true,
          suicide: true,
          updatedAt: true,
          upTo: true,

          users: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
