import { CreateTaxRateInput } from './create-tax-rate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaxRateInput extends PartialType(CreateTaxRateInput) {
}
