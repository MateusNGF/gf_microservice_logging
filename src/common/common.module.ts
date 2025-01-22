import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import configurations from './config'
import { PrismaService } from "./services/prisma.service";

@Module({
    controllers: [],
    providers: [
        PrismaService
    ],
    exports: [PrismaService],
    imports: [
        ConfigModule.forRoot({
            load: configurations,
            isGlobal: true,
            cache: true,
            envFilePath: ['.env'],
            expandVariables: true,
        }),
    ]
})
export class CommonModule {

}