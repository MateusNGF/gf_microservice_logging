import { Inject, Injectable } from "@nestjs/common";
import { ActionLog } from "@prisma/client";
import { PrismaService } from "src/common/services/prisma.service";


@Injectable()
export class ActionsLogService {

    constructor(
        private readonly prismaService : PrismaService
    ){}

    registerAction(content : Partial<ActionLog>){
        return this.prismaService.actionLog.create({
            data: content as any
        })
    }
}