import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('createInvoice')
  async createInvoice(data: any) {
    return this.billingService.createInvoice(data);
  }
}
