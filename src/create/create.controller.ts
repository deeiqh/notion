import {
  Body,
  Controller,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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
import { CreateService } from './create.service';

@Controller('create')
export class CreateController {
  constructor(private createService: CreateService) {}

  @Post('evaluation')
  async createEvaluation(
    @Body() input: CreateEvaluationDto,
  ): Promise<RetrieveEvaluationDto> {
    return await this.createService.createEvaluation(input);
  }

  @Post('challenge')
  async createChallenge(
    @Body() input: CreateChallengeDto,
  ): Promise<RetrieveChallengeDto> {
    return await this.createService.createChallenge(input);
  }

  @Post('week')
  async createWeek(@Body() input: CreateWeekDto): Promise<RetrieveWeekDto> {
    return await this.createService.createWeek(input);
  }

  @Post('feedback')
  async createFeedback(
    @Body() input: createFeedbackDto,
  ): Promise<RetrieveFeedbackDto> {
    return await this.createService.createFeedback(input);
  }

  @Post('theme')
  async createTheme(@Body() input: CreateThemeDto): Promise<RetrieveThemeDto> {
    return await this.createService.createTheme(input);
  }

  @Post('assignment')
  async createAssignment(
    @Body() input: CreateAssignmentDto,
  ): Promise<RetrieveAssignmentDto> {
    return await this.createService.createAssignment(input);
  }

  @Post('comment')
  async createComment(
    @Body() input: CreateCommentDto,
  ): Promise<RetrieveCommentDto> {
    return await this.createService.createComment(input);
  }
}
