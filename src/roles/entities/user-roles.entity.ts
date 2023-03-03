import { RoleEntity } from './roles.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/users/entities/user.entity';

@ObjectType()
@Entity('user_roles')
export class UserRoles {
  @Field(() => ID)
  @PrimaryGeneratedColumn({
    type: 'integer',
  })
  id: number;

  @OneToMany(() => RoleEntity, (role: RoleEntity) => role.id)
  @Field()
  @Column({ type: 'integer' })
  roleId: number;

  @OneToMany(() => UserEntity, (user: UserEntity) => user.id)
  @Field()
  @Column({ type: 'integer' })
  userId: number;
}
