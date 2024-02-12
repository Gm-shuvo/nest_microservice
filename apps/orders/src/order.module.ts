import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
      envFilePath: './apps/orders/.env',
    }),
    DatabaseModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
