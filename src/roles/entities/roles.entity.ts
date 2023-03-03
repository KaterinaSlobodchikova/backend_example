import { UserEntity } from './../../users/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from './user-roles.entity';

@ObjectType()
@Entity('roles')
export class RoleEntity {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'user_id',
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Уникальное значение роли' })
  @Field({
    nullable: false,
  })
  @Column({
    nullable: false,
  })
  value: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Field({
    nullable: false,
  })
  @Column({
    nullable: false,
  })
  description: string;

  @ManyToMany(() => UserEntity, () => UserRoles)
  users: UserEntity[];
}
