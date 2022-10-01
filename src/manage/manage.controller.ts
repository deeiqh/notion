import { Body, Controller, Post } from '@nestjs/common';
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
}
