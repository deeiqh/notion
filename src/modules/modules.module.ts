import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';

@Module({
  controllers: [ModulesController],
  providers: [ModulesService, PrismaService],
})
export class ModulesModule {}
