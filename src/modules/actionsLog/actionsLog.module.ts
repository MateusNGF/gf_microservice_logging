import { Module } from "@nestjs/common";
import { CommonModule } from "src/common/common.module";
import { ActionsLogService } from "./actionsLog.service";
import { ActionsLogRMQController } from "./actionsLog.rmq.controller";

@Module({
    imports: [
        CommonModule
    ],
    controllers: [ActionsLogRMQController],
    providers: [ActionsLogService],
    exports: [ActionsLogService]
})
export class ActionsLogModule {}