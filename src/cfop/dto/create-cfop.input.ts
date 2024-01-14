import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCfopInput {
  @Field()
  id: string;

  @Field()
  code: string;

  @Field()
  name: string;
}
