import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RetrieveFeedbackDto } from 'src/utils/dtos/retrieve-feedback.dto';
import { CreateUserDto } from './dto/request/create.dto';
import { RetrieveUserDto } from './dto/response/retrieve.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(userId: string): Promise<RetrieveUserDto> {
    const user = await this.prisma.user.findUnique({
      where: {
        uuid: userId,
      },
    });
    return plainToInstance(RetrieveUserDto, user);
  }

  async getUserModules(userId: string): Promise<RetrieveModuleDto[]> {
    const user = await this.prisma.user.findUnique({
      where: { uuid: userId },
      select: {
        module: true,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user.module.map((module) =>
      plainToInstance(RetrieveModuleDto, module),
    );
  }

  async filterAllFeedback(userId: string): Promise<RetrieveFeedbackDto[]> {
    const user = await this.prisma.user.findUnique({
      where: {
        uuid: userId,
      },
      select: {
        feedbackFrom: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user.feedbackFrom.map((feedback) =>
      plainToInstance(RetrieveFeedbackDto, feedback),
    );
  }

  async filterModulesFeedback(userId: string): Promise<RetrieveFeedbackDto[]> {
    const user = await this.prisma.user.findUnique({
      where: {
        uuid: userId,
      },
      select: {
        module: {
          select: {
            evaluation: {
              select: {
                feedback: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const feedbacks: RetrieveFeedbackDto[] = [];

    user.module.forEach((module) =>
      module.evaluation.feedback.forEach((feedback) =>
        feedbacks.push(plainToInstance(RetrieveFeedbackDto, feedback)),
      ),
    );

    return feedbacks;
  }

  async filterWeeksFeedback(userId: string): Promise<RetrieveFeedbackDto[]> {
    const user = await this.prisma.user.findUnique({
      where: {
        uuid: userId,
      },
      select: {
        module: {
          select: {
            week: {
              select: {
                feeback: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const feedbacks: RetrieveFeedbackDto[] = [];

    user.module.forEach((module) =>
      module.week.forEach((week) =>
        week.feeback.forEach((feedback) =>
          plainToInstance(RetrieveFeedbackDto, feedback),
        ),
      ),
    );

    return feedbacks;
  }

  async createUser(input: CreateUserDto): Promise<RetrieveUserDto> {
    const user = this.prisma.user.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveUserDto, user);
  }
}
