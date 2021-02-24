import { Module } from '@nestjs/common';
import { TestLibrary2Service } from './test-library-2.service';

@Module({
  providers: [TestLibrary2Service],
  exports: [TestLibrary2Service],
})
export class TestLibrary2Module {}
