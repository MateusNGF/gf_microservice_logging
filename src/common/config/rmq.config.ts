import { registerAs } from "@nestjs/config"

export default registerAs(
    'rmq',
    (): Record<string, unknown> => ({
        uri: process.env.RABBITMQ_URL,
        queue: {
            logging: process.env.RABBITMQ_LOGGING_QUEUE,
            auth: process.env.RABBITMQ_AUTH_QUEUE,
            notification: process.env.RABBITMQ_NOTIFICATION_QUEUE
        },
    })
)