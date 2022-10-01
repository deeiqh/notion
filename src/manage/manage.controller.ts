import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get('validation/:evaluationId')
  async getEvaluation(@Body() input: any) {
    await this.managerService.getEvaluation(input);
  }

  // @Get('actualWeek')
  // async actualWeek(@Body() input: any) {
  //   await this.managerService.actualWeek(input);
  // }
}
