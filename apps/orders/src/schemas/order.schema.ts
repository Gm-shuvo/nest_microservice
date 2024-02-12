import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { AbstractDocument } from '@app/common';

@Schema()
export class Order extends AbstractDocument {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  quantity: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
