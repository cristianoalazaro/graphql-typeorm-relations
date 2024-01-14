import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateTaxRateInput {
  @Field(() => ID)
  id: string;

  @Field()
  descripyion: string;

  @Field()
  cfopIntraStateId: string;

  @Field()
  cfopInterStateId: string;
}
