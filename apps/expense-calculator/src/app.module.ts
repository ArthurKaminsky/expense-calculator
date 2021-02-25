import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplycheckService } from './applycheck/applycheck.service';
import { TestLibraryModule } from '@testLib/test-library'; //@testLib path alias of the prefix supplied with nest g library
import { Applycheck } from './applycheck';

@Module({
  imports: [TestLibraryModule],
  controllers: [AppController],
  providers: [AppService, ApplycheckService, Applycheck],
})
export class AppModule {}
