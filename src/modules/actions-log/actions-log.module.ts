import { Module } from "@nestjs/common";
import { CommonModule } from "src/common/common.module";
import { ActionsLogService } from "./actions-log.service";
import { ActionsLogRMQController } from "./actions-log.rmq.controller";

@Module({
    imports: [
        CommonModule
    ],
    controllers: [ActionsLogRMQController],
    providers: [ActionsLogService],
    exports: [ActionsLogService]
})
export class ActionsLogModule {}