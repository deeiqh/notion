import { Feedback } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveFeedbackDto } from './retrieve-feedback.dto';

export class RetrieveEvaluationDto {
  uuid: string;
  weight: number;
  score: number;
  maxScore: number;
  @Type(() => RetrieveFeedbackDto)
  feedback: Feedback[];
}
