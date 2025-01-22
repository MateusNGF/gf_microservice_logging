import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { TransformMessagePayload } from "src/common/decorators/payload.decorator";

import { ActionsLogService } from "./actionsLog.service";
import { CreateActionLogDTO } from "./dto";


@Controller({})
export class ActionsLogRMQController {

    constructor(
        private readonly actionsLogService : ActionsLogService
    ){}

    @EventPattern('action.users')
    async registerAction(@TransformMessagePayload() content : CreateActionLogDTO){
        return await this.actionsLogService.registerAction(content)
    }
}