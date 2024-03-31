import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}
  getOptions(query: string, noack: boolean = false) {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get('RABBIT_MQ_URI')],
        queue: this.configService.get(`RABBIT_MQ_${query}_QUEUE`),
        noack,
        persistant: true,
      },
    };
  }
}
