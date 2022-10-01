import { Assignment } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveAssignmentDto } from './retrieve-assignment.dto';

export class RetrieveChallengeDto {
  uuid: string;
  @Type(() => RetrieveAssignmentDto)
  assignment: Assignment[];
  evaluationId: string;
}
