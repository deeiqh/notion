import { Feedback } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveFeedbackDto } from './retrieve-feedback.dto';

export class RetrieveEvaluationDto {
  uuid: string;
  weight: string;
  score: string;
  maxScore: string;
  @Type(() => RetrieveFeedbackDto)
  feedback: Feedback[];
}
