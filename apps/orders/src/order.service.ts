import { Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { CreateOrderDto } from './dto/creat-order.dto';
import { BILLING_SERVICE } from 'libs/common/constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async getOrders() {
    return this.ordersRepository.find();
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    const session = await this.ordersRepository.startTransaction();
    try {
      const order = await this.ordersRepository.create(createOrderDto, {
        session,
      });
      await lastValueFrom(
        this.billingClient.emit('createInvoice', {
          createOrderDto,
        }),
      );
      await session.commitTransaction();
      session.endSession();
      return order;
    } catch (e) {
      await session.abortTransaction();
      session.endSession();
      throw e;
    }
  }
}
