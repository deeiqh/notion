import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';
import { RetrieveFeedbackDto } from 'src/utils/dtos/retrieve-feedback.dto';
import { CreateUserDto } from './dto/request/create.dto';
import { RetrieveUserDto } from './dto/response/retrieve.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<RetrieveUserDto> {
    return await this.usersService.getUser(userId);
  }

  @Get(':userId/modules')
  async getProgramModules(
    @Param('userId') userId: string,
  ): Promise<RetrieveModuleDto[]> {
    return await this.usersService.getUserModules(userId);
  }

  @Get(':userId/feedbacks/filterAll')
  async filterAllFeedback(
    @Param('userId') userId: string,
  ): Promise<RetrieveFeedbackDto[]> {
    return this.usersService.filterAllFeedback(userId);
  }

  @Get(':userId/feedbacks/modules')
  async filterModulesFeedback(
    @Param('userId') userId: string,
  ): Promise<RetrieveFeedbackDto[]> {
    return this.usersService.filterModulesFeedback(userId);
  }

  @Get(':userId/feedbacks/weeks')
  async filterWeeksFeedback(
    @Param('userId') userId: string,
  ): Promise<RetrieveFeedbackDto[]> {
    return this.usersService.filterWeeksFeedback(userId);
  }

  @Post()
  async createUser(@Body() input: CreateUserDto): Promise<RetrieveUserDto> {
    return await this.usersService.createUser(input);
  }
}
