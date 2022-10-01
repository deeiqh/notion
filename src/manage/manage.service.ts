import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { RetrieveEvaluationDto } from 'src/utils/dtos/retrieve-evaluation.dto';

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

  async getEvaluation(evaluationId: any) {
    const evaluation = await this.prisma.evaluation.findUnique({
      where: {
        uuid: evaluationId,
      },
    });
    console.log('AAAAA', plainToInstance(RetrieveEvaluationDto, evaluation));
    return plainToInstance(RetrieveEvaluationDto, evaluation);
  }

  // async actualWeek(input: any) {
  //   const module = await this.prisma.module.findUnique({
  //     where: {
  //       uuid: input.moduleId,
  //     },
  //     select: {
  //       week: {
  //         where: {
  //           name: 'name',
  //         },
  //       },
  //     },
  //   });
  //   return plain
  // }
}
