import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateActionLogDTO } from "./dto";


@Injectable()
export class ActionsLogService {

    constructor(
        private readonly prismaService : PrismaService
    ){}

    registerAction(content : CreateActionLogDTO){
        return this.prismaService.actionLog.create({
            data: content as any
        })
    }
}