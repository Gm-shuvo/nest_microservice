import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsPositive()
  quantity: number;

  @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;
}
