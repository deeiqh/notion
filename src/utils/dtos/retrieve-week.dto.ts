import { Feedback, Theme } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveFeedbackDto } from './retrieve-feedback.dto';
import { RetrieveThemeDto } from './retrieve-theme.dto';

export class RetrieveWeekDto {
  uuid: string;
  moduleId: string;
  name: string;
  @Type(() => RetrieveThemeDto)
  theme: Theme[];
  @Type(() => RetrieveFeedbackDto)
  feeback: Feedback[];
  isCompleted: boolean;
}
