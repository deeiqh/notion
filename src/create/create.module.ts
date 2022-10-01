import { Module } from '@nestjs/common';
import { CreateService } from './create.service';
import { CreateController } from './create.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CreateService, PrismaService],
  controllers: [CreateController],
})
export class CreateModule {}
