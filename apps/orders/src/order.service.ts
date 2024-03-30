import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { CreateOrderDto } from './dto/creat-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async getOrders() {
    return this.ordersRepository.find();
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    return this.ordersRepository.create(createOrderDto);
  }
}
