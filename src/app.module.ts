import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './modules/modules.module';
import { ProgramsModule } from './programs/programs.module';
import { CreateModule } from './create/create.module';

@Module({
  imports: [UsersModule, ModulesModule, ProgramsModule, CreateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
