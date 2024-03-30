import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/creat-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrderService) {}
  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }
}
