import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  getHello(): string {
    return 'Hello World!';
  }

  createInvoice(data: any) {
    console.log('Creating invoice for order', data.createOrderDto);
  }
}
