import { Module, User } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';
import { RetrieveUserDto } from 'src/users/dto/response/retrieve.dto';

export class RetrieveProgramDto {
  uuid: string;
  @Type(() => RetrieveUserDto)
  user: User[];
  @Type(() => RetrieveModuleDto)
  module: Module[];
  title: string;
  description: string;
}
