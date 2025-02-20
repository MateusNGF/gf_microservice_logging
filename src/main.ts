import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { setupProfiling } from './profiling';
import { Transport } from '@nestjs/microservices';
import { AmqpConnectionManagerSocketOptions } from '@nestjs/microservices/external/rmq-url.interface';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  setupProfiling();

  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Bootstrap");

  const configService = app.get(ConfigService);

  process.title = await configService.get('app.name') as string;
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`${configService.get('rmq.uri')}`],
      queue: `${configService.get('rmq.queue.logging')}`,
      queueOptions: { durable: true },
      prefetchCount: 4,
      socketOptions: {
        clientProperties: {
          connection_name: 'logging_microservice',
        },
      } as AmqpConnectionManagerSocketOptions
    },
  })

  app.startAllMicroservices();

  await app.listen(process.env.HTTP_PORT ?? 3000);
}


bootstrap();
