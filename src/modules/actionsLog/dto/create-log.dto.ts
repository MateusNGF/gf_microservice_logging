import { ActionLog } from "@prisma/client";

export class CreateActionLogDTO implements Partial<ActionLog> {
    action?: string;
    userId?: string;
    module?: string;
    payload?: any;
    timestamp?: Date;
}