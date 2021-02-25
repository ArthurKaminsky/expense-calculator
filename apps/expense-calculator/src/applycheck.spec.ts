import { Test, TestingModule } from '@nestjs/testing';
import { Applycheck } from './applycheck';

describe('Applycheck', () => {
  let provider: Applycheck;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Applycheck],
    }).compile();

    provider = module.get<Applycheck>(Applycheck);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
