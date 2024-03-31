import { DynamicModule, Module } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices'; // Import Transport
import { ConfigService } from '@nestjs/config';

interface RmqModuleOptions {
  name: string;
}

@Module({
  imports: [],
  controllers: [],
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.RMQ, // Explicitly set Transport.RMQ
              options: {
                urls: [configService.get<string>('RABBIT_MQ_URI')], // Assuming your config keys here
                queue: configService.get<string>(`RABBIT_MQ_${name}_QUEUE`),
                // Include other options as needed, e.g., queueOptions, prefetchCount, etc.
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
