import { Module } from '@nestjs/common';
import { RmqService } from './rmq.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {}
