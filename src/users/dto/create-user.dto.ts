import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import { IsString, Length, IsEmail } from 'class-validator';

@InputType()
export class CreateUserDto {
  @ApiProperty({ example: 'Katarina', description: 'Имя' })
  @Field({ nullable: false })
  name: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  @Field()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16 символов' })
  @Field({ nullable: false })
  password: string;
}
