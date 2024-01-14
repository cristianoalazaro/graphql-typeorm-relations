import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaxRateService } from './tax-rate.service';
import { TaxRate } from './entities/tax-rate.entity';
import { CreateTaxRateInput } from './dto/create-tax-rate.input';
import { UpdateTaxRateInput } from './dto/update-tax-rate.input';

@Resolver(() => TaxRate)
export class TaxRateResolver {
  constructor(private readonly taxRateService: TaxRateService) {}

  @Mutation(() => TaxRate)
  createTaxRate(@Args('createTaxRateInput') createTaxRateInput: CreateTaxRateInput) {
    return this.taxRateService.create(createTaxRateInput);
  }

  @Query(() => [TaxRate])
  taxRates() {
    return this.taxRateService.findAll();
  }

  @Query(() => TaxRate)
  taxRate(@Args('id', { type: () => String }) id: string) {
    return this.taxRateService.findOne(id);
  }

  @Mutation(() => TaxRate)
  updateTaxRate(@Args('updateTaxRateInput') updateTaxRateInput: UpdateTaxRateInput) {
    return this.taxRateService.update(updateTaxRateInput);
  }

  @Mutation(() => TaxRate)
  removeTaxRate(@Args('id', { type: () => Int }) id: number) {
    return this.taxRateService.remove(id);
  }
}
