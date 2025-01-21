import { registerAs } from "@nestjs/config";

export default registerAs(
    'app',
    (): Record<string, unknown> => ({
        name: process.env.APP_NAME ?? 'logging',
        env: process.env.APP_ENV ?? 'development',
    })
)