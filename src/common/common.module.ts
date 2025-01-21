import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import configurations from './config'

@Module({
    controllers: [],
    providers: [],
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