import { ActionLog } from "@prisma/client";

export class CreateActionLogDTO implements Partial<ActionLog> {
    action?: string;
    module?: string;
    createdAt?: Date;
    timestamp?: Date;
    service?: string;
    userId?: string;
}