import { Controller, Get, Param, Post } from '@nestjs/common';
import { RetrieveChallengeDto } from 'src/utils/dtos/retrieve-challenge.dto';
import { RetrieveFeedbackDto } from 'src/utils/dtos/retrieve-feedback.dto';
import { RetrieveThemeDto } from 'src/utils/dtos/retrieve-theme.dto';
import { RetrieveWeekDto } from 'src/utils/dtos/retrieve-week.dto';
import { CreateModuleDto } from './dtos/create.dto';
import { RetrieveModuleDto } from './dtos/retrieve.dto';
import { ModulesService } from './modules.service';

@Controller('modules')
export class ModulesController {
  constructor(private modulesService: ModulesService) {}

  @Get(':moduleId/feedback')
  async getModuleFeedback(
    @Param('moduleId') moduleId: string,
  ): Promise<RetrieveFeedbackDto[]> {
    return await this.modulesService.getModuleFeedback(moduleId);
  }

  @Get(':moduleId/weeks')
  async getModuleWeeks(
    @Param('moduleId') moduleId: string,
  ): Promise<RetrieveWeekDto[]> {
    return await this.modulesService.getModuleWeeks(moduleId);
  }

  @Get(':moduleId/weeks/:weekId/themes')
  async getWeekThemes(
    @Param('moduleId') moduleId: string,
    @Param('weekId') weekId: string,
  ): Promise<RetrieveThemeDto[]> {
    return await this.modulesService.getWeekThemes(moduleId, weekId);
  }

  @Get(':moduleId/weeks/:weekId/challenge')
  async getWeekChallenge(
    @Param('moduleId') moduleId: string,
    @Param('weekId') weekId: string,
  ): Promise<RetrieveChallengeDto> {
    return await this.modulesService.getWeekChallenge(moduleId, weekId);
  }

  @Get(':moduleId/weeks/:weekId/feedbacks')
  async getWeekFeedbacks(
    @Param('moduleId') moduleId: string,
    @Param('weekId') weekId: string,
  ): Promise<RetrieveFeedbackDto[]> {
    return await this.modulesService.getWeekFeedbacks(moduleId, weekId);
  }

  @Post()
  async createModule(input: CreateModuleDto): Promise<RetrieveModuleDto> {
    return await this.modulesService.createModule(input);
  }
}
