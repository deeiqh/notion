import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ManageService {
  constructor(private prisma: PrismaService) {}

  async usrToModule(input: any) {
    await this.prisma.module.update({
      where: {
        uuid: input.moduleId,
      },
      data: {
        user: {
          connect: {
            uuid: input.userId,
          },
        },
      },
    });
  }

  async moduleToProgram(input: any) {
    await this.prisma.program.update({
      where: {
        uuid: input.programId,
      },
      data: {
        module: {
          connect: {
            uuid: input.moduleId,
          },
        },
      },
    });
  }
}
