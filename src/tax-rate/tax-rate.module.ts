import { Module } from '@nestjs/common';
import { TaxRateService } from './tax-rate.service';
import { TaxRateResolver } from './tax-rate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxRate } from './entities/tax-rate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TaxRate])],
  providers: [TaxRateResolver, TaxRateService],
})
export class TaxRateModule {}
