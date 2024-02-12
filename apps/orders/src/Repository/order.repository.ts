import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';

import { Order } from '../schemas/order.schema';

@Injectable()
export class OrderRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(Order.name);

}
