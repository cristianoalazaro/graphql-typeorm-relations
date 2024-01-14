import { CreateCfopInput } from './create-cfop.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCfopInput extends PartialType(CreateCfopInput) {
  @Field(() => ID)
  id: string;
}
