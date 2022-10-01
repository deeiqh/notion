import { Comment } from '@prisma/client';
import { Type } from 'class-transformer';
import { RetrieveCommentDto } from './retrieve-comment.dto';

export class RetrieveFeedbackDto {
  uuid: string;
  category: string;
  content: string;
  state: string;
  type: string;
  userFromId: string;
  userToId: string;
  evaluationId: string;
  weekId: string;
  @Type(() => RetrieveCommentDto)
  comment: Comment[];
}
