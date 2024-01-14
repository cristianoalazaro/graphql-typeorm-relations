import { Test, TestingModule } from '@nestjs/testing';
import { CfopResolver } from './cfop.resolver';
import { CfopService } from './cfop.service';

describe('CfopResolver', () => {
  let resolver: CfopResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CfopResolver, CfopService],
    }).compile();

    resolver = module.get<CfopResolver>(CfopResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
