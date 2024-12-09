/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AgentAssignmentService } from "../agentAssignment.service";
import { AgentAssignmentCreateInput } from "./AgentAssignmentCreateInput";
import { AgentAssignment } from "./AgentAssignment";
import { AgentAssignmentFindManyArgs } from "./AgentAssignmentFindManyArgs";
import { AgentAssignmentWhereUniqueInput } from "./AgentAssignmentWhereUniqueInput";
import { AgentAssignmentUpdateInput } from "./AgentAssignmentUpdateInput";

export class AgentAssignmentControllerBase {
  constructor(protected readonly service: AgentAssignmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AgentAssignment })
  async createAgentAssignment(
    @common.Body() data: AgentAssignmentCreateInput
  ): Promise<AgentAssignment> {
    return await this.service.createAgentAssignment({
      data: {
        ...data,

        property: data.property
          ? {
              connect: data.property,
            }
          : undefined,
      },
      select: {
        agentName: true,
        assignedDate: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AgentAssignment] })
  @ApiNestedQuery(AgentAssignmentFindManyArgs)
  async agentAssignments(
    @common.Req() request: Request
  ): Promise<AgentAssignment[]> {
    const args = plainToClass(AgentAssignmentFindManyArgs, request.query);
    return this.service.agentAssignments({
      ...args,
      select: {
        agentName: true,
        assignedDate: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async agentAssignment(
    @common.Param() params: AgentAssignmentWhereUniqueInput
  ): Promise<AgentAssignment | null> {
    const result = await this.service.agentAssignment({
      where: params,
      select: {
        agentName: true,
        assignedDate: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAgentAssignment(
    @common.Param() params: AgentAssignmentWhereUniqueInput,
    @common.Body() data: AgentAssignmentUpdateInput
  ): Promise<AgentAssignment | null> {
    try {
      return await this.service.updateAgentAssignment({
        where: params,
        data: {
          ...data,

          property: data.property
            ? {
                connect: data.property,
              }
            : undefined,
        },
        select: {
          agentName: true,
          assignedDate: true,
          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAgentAssignment(
    @common.Param() params: AgentAssignmentWhereUniqueInput
  ): Promise<AgentAssignment | null> {
    try {
      return await this.service.deleteAgentAssignment({
        where: params,
        select: {
          agentName: true,
          assignedDate: true,
          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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
