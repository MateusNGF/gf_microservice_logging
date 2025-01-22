import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { TransformMessagePayload } from "src/common/decorators/payload.decorator";

import {ActionLog } from '@prisma/client'
import { ActionsLogService } from "./actionsLog.service";


@Controller({})
export class ActionsLogRMQController {

    constructor(
        private readonly actionsLogService : ActionsLogService
    ){}

    @EventPattern('action.users')
    async registerAction(@TransformMessagePayload() content : Partial<ActionLog>){
        return await this.actionsLogService.registerAction(content)
    }
}