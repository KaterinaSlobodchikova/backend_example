import { UserEntity } from './../users/entities/user.entity';
//-------------------- Nest -----------------//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//-------------------- Roles -----------------//
import { RoleEntity } from './entities/roles.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UserRoles } from './entities/user-roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, UserEntity, UserRoles])],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
