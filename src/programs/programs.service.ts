import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RetrieveProgramDto } from 'src/utils/dtos/retrieve-program.dto';
import { CreateProgramDto } from './dtos/create.dto';

@Injectable()
export class ProgramsService {
  constructor(private prisma: PrismaService) {}

  async getModules(programId: string): Promise<RetrieveModuleDto[]> {
    const program = await this.prisma.program.findUnique({
      where: {
        uuid: programId,
      },
      select: {
        module: true,
      },
    });

    if (!program) {
      throw new NotFoundException('Program not foudn');
    }

    return program.module.map((module) =>
      plainToInstance(RetrieveModuleDto, module),
    );
  }

  async createProgram(input: CreateProgramDto): Promise<RetrieveProgramDto> {
    const program = await this.prisma.program.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveProgramDto, program);
  }
}
