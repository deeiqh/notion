import { Module } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';

export class RetrieveUserDto {
  uuid: string;
  role: string;
  name: string;
  technology: string;
  email: string;
  programId: string;
  @Type(() => RetrieveModuleDto)
  module: Module[];
}
