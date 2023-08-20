import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZombiesModule } from './zombies/zombies.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ZombiesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
