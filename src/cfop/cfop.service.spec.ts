import { Test, TestingModule } from '@nestjs/testing';
import { CfopService } from './cfop.service';

describe('CfopService', () => {
  let service: CfopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CfopService],
    }).compile();

    service = module.get<CfopService>(CfopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
