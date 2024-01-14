import { Test, TestingModule } from '@nestjs/testing';
import { TaxRateResolver } from './tax-rate.resolver';
import { TaxRateService } from './tax-rate.service';

describe('TaxRateResolver', () => {
  let resolver: TaxRateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxRateResolver, TaxRateService],
    }).compile();

    resolver = module.get<TaxRateResolver>(TaxRateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
