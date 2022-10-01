import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssignmentDto } from 'src/utils/dtos/create-assignment.dto';
import { CreateChallengeDto } from 'src/utils/dtos/create-challenge.dto';
import { CreateCommentDto } from 'src/utils/dtos/create-comment.dto';
import { CreateEvaluationDto } from 'src/utils/dtos/create-evaluation.dto';
import { createFeedbackDto } from 'src/utils/dtos/create-feedback.dto';
import { CreateThemeDto } from 'src/utils/dtos/create-theme.dto';
import { CreateWeekDto } from 'src/utils/dtos/create-week.dto';
import { RetrieveAssignmentDto } from 'src/utils/dtos/retrieve-assignment.dto';
import { RetrieveChallengeDto } from 'src/utils/dtos/retrieve-challenge.dto';
import { RetrieveCommentDto } from 'src/utils/dtos/retrieve-comment.dto';
import { RetrieveEvaluationDto } from 'src/utils/dtos/retrieve-evaluation.dto';
import { RetrieveFeedbackDto } from 'src/utils/dtos/retrieve-feedback.dto';
import { RetrieveThemeDto } from 'src/utils/dtos/retrieve-theme.dto';
import { RetrieveWeekDto } from 'src/utils/dtos/retrieve-week.dto';

@Injectable()
export class CreateService {
  constructor(private prisma: PrismaService) {}

  async createEvaluation(
    input: CreateEvaluationDto,
  ): Promise<RetrieveEvaluationDto> {
    const evaluation = await this.prisma.evaluation.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveEvaluationDto, evaluation);
  }

  async createChallenge(
    input: CreateChallengeDto,
  ): Promise<RetrieveChallengeDto> {
    const challenge = await this.prisma.challenge.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveChallengeDto, challenge);
  }

  async createWeek(input: CreateWeekDto): Promise<RetrieveWeekDto> {
    const week = await this.prisma.week.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveWeekDto, week);
  }

  async createFeedback(input: createFeedbackDto): Promise<RetrieveFeedbackDto> {
    const feedback = await this.prisma.feedback.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveFeedbackDto, feedback);
  }

  async createTheme(input: CreateThemeDto): Promise<RetrieveThemeDto> {
    const theme = await this.prisma.theme.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveThemeDto, theme);
  }

  async createAssignment(
    input: CreateAssignmentDto,
  ): Promise<RetrieveAssignmentDto> {
    const assignment = await this.prisma.assignment.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveAssignmentDto, assignment);
  }

  async createComment(input: CreateCommentDto): Promise<RetrieveCommentDto> {
    const comment = await this.prisma.comment.create({
      data: {
        ...input,
      },
    });
    return plainToInstance(RetrieveCommentDto, comment);
  }
}
