import { Controller, Get, Param, Post } from '@nestjs/common';
import { RetrieveModuleDto } from 'src/modules/dtos/retrieve.dto';
import { RetrieveProgramDto } from 'src/utils/dtos/retrieve-program.dto';
import { CreateProgramDto } from './dtos/create.dto';
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

  @Post()
  async createProgram(input: CreateProgramDto): Promise<RetrieveProgramDto> {
    return await this.programsService.createProgram(input);
  }
}
