import { Controller, Get, Param } from '@nestjs/common';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';
import { ProgramsService } from './programs.service';

@Controller('programs')
export class ProgramsController {
  constructor(private programsService: ProgramsService) {}

  @Get(':programId/modules')
  async getModules(
    @Param('programId') programId: string,
  ): Promise<RetrieveModuleDto[]> {
    return await this.programsService.getModules(programId);
  }
}
