import { ActionLog } from "@prisma/client";

export class CreateActionLogDTO implements Partial<ActionLog> {
    action?: string;
    employeeId?: number;
    module?: string;
    payload?: any;
    timestamp?: Date;
}