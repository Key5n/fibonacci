import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibController } from './fib/fib.controller';
import { FibService } from './fib/fib.service';

@Module({
  imports: [],
  controllers: [AppController, FibController],
  providers: [AppService, FibService],
})
export class AppModule {}
