import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from 'src/roles/entities/roles.entity';
import { UserRoles } from 'src/roles/entities/user-roles.entity';

@ObjectType()
@Entity('users')
export class UserEntity {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'user_id',
  })
  id: number;

  @ApiProperty({ example: 'Katarina', description: 'Имя' })
  @Field({
    nullable: false,
  })
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'Почтовый адрес' })
  @Field()
  @Column({
    name: 'email',
    nullable: false,
    default: '',
  })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @Field({
    nullable: false,
  })
  @Column({
    nullable: false,
    // default: '',
  })
  password: string;

  @ManyToMany(() => RoleEntity, () => UserRoles)
  roles: RoleEntity[];
}
