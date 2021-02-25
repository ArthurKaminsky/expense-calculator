import { Test, TestingModule } from '@nestjs/testing';
import { ApplycheckService } from './applycheck.service';

describe('ApplycheckService', () => {
  let service: ApplycheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplycheckService],
    }).compile();

    service = module.get<ApplycheckService>(ApplycheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
