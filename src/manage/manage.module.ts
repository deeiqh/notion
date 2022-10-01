import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ManageController } from './manage.controller';
import { ManageService } from './manage.service';

@Module({
  controllers: [ManageController],
  providers: [ManageService, PrismaService],
})
export class ManageModule {}
