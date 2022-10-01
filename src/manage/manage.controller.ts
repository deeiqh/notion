import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ManageService } from './manage.service';

@Controller('manage')
export class ManageController {
  constructor(private managerService: ManageService) {}

  @Post('usrToModule')
  async usrToModule(@Body() input: any) {
    await this.managerService.usrToModule(input);
  }

  @Post('moduleToProgram')
  async moduleToProgram(@Body() input: any) {
    await this.managerService.moduleToProgram(input);
  }

  @Get('evaluation/:evaluationId')
  async getEvaluation(@Param('evaluationId') evaluationId: any) {
    await this.managerService.getEvaluation(evaluationId);
  }

  // @Get('actualWeek')
  // async actualWeek(@Body() input: any) {
  //   await this.managerService.actualWeek(input);
  // }
}
