import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { RetrieveAssignmentDto } from 'src/utils/dtos/retrieve-assignment.dto';
import { RetrieveChallengeDto } from 'src/utils/dtos/retrieve-challenge.dto';
import { RetrieveFeedbackDto } from 'src/utils/dtos/retrieve-feedback.dto';
import { RetrieveThemeDto } from 'src/utils/dtos/retrieve-theme.dto';
import { RetrieveWeekDto } from 'src/utils/dtos/retrieve-week.dto';
import { CreateModuleDto } from './dtos/create.dto';
import { RetrieveModuleDto } from './dtos/retrieve.dto';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService) {}

  async getModuleFeedback(moduleId: string): Promise<RetrieveFeedbackDto[]> {
    const module = await this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
      select: {
        evaluation: {
          select: {
            feedback: true,
          },
        },
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return module.evaluation.feedback.map((feedback) =>
      plainToInstance(RetrieveFeedbackDto, feedback),
    );
  }

  async getModuleWeeks(moduleId: string): Promise<RetrieveWeekDto[]> {
    const module = await this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
      select: {
        week: true,
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return module.week.map((week) => plainToInstance(RetrieveWeekDto, week));
  }

  async getWeekThemes(
    moduleId: string,
    weekId: string,
  ): Promise<RetrieveThemeDto[]> {
    const module = await this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
      select: {
        week: {
          where: {
            uuid: weekId,
          },
          select: {
            theme: true,
          },
        },
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return module.week[0].theme.map((theme) =>
      plainToInstance(RetrieveThemeDto, theme),
    );
  }

  async getWeekChallenge(
    moduleId: string,
    weekId: string,
  ): Promise<RetrieveChallengeDto> {
    const module = await this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
      select: {
        week: {
          where: {
            uuid: weekId,
          },
          select: {
            challenge: true,
          },
        },
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return plainToInstance(RetrieveChallengeDto, module.week[0].challenge);
  }

  async getWeekFeedbacks(
    moduleId: string,
    weekId: string,
  ): Promise<RetrieveFeedbackDto[]> {
    const module = await this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
      select: {
        week: {
          where: {
            uuid: weekId,
          },
          select: {
            feeback: true,
          },
        },
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return module.week[0].feeback.map((feeback) =>
      plainToInstance(RetrieveFeedbackDto, feeback),
    );
  }

  async createModule(input: CreateModuleDto): Promise<RetrieveModuleDto> {
    const module = await this.prisma.module.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveModuleDto, module);
  }

  async getChallengeAssignments(
    moduleId: string,
    weekId: string,
  ): Promise<RetrieveAssignmentDto[]> {
    const module = await this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
      select: {
        week: {
          where: {
            uuid: weekId,
          },
          select: {
            challenge: {
              select: {
                assignment: true,
              },
            },
          },
        },
      },
    });

    if (!module) {
      throw new NotFoundException('Module not found');
    }

    return module.week[0].challenge.assignment.map((assignment) =>
      plainToInstance(RetrieveAssignmentDto, assignment),
    );
  }

  async getModule(moduleId: string): Promise<RetrieveModuleDto> {
    const module = this.prisma.module.findUnique({
      where: {
        uuid: moduleId,
      },
    });
    return plainToInstance(RetrieveModuleDto, module);
  }
}
