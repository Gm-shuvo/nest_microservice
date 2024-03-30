import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule } from '@app/common';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/auth/.env',
    }),
    DatabaseModule,
    // MongooseModule.forFeature([
    //   {
    //     name: 'auth',
    //     schema: AuthSchema,
    //   },
    // ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
