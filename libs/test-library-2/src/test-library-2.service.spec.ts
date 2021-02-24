import { Test, TestingModule } from '@nestjs/testing';
import { TestLibrary2Service } from './test-library-2.service';

describe('TestLibrary2Service', () => {
  let service: TestLibrary2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestLibrary2Service],
    }).compile();

    service = module.get<TestLibrary2Service>(TestLibrary2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
