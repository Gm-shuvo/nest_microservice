import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
  console.log(`Order service is running on: ${await app.getUrl()}`);
}
bootstrap();
