import { RolesModule } from './../roles/roles.module';
import { RoleEntity } from './../roles/entities/roles.entity';
//--------------- Nest ---------------------//
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';

//--------------- Users ---------------------//
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UserRoles } from 'src/roles/entities/user-roles.entity';

//--------------- Auth ---------------------//
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
