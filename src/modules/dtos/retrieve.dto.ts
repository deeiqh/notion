import { Program, User, Week } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveUserDto } from 'src/users/dto/response/retrieve.dto';
import { RetrieveProgramDto } from 'src/utils/dtos/retrieve-program.dto';
import { RetrieveWeekDto } from 'src/utils/dtos/retrieve-week.dto';

export class RetrieveModuleDto {
  uuid: string;
  @Type(() => RetrieveUserDto)
  user: User[];
  @Type(() => RetrieveProgramDto)
  program: Program[];
  @Type(() => RetrieveWeekDto)
  week: Week[];
  isCompleted: boolean;
  evaluationId: string;
  title: string;
  description: string;
}
