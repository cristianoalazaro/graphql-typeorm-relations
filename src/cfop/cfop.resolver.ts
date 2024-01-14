import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CfopService } from './cfop.service';
import { Cfop } from './entities/cfop.entity';
import { CreateCfopInput } from './dto/create-cfop.input';
import { UpdateCfopInput } from './dto/update-cfop.input';

@Resolver(() => Cfop)
export class CfopResolver {
  constructor(private readonly cfopService: CfopService) {}

  @Mutation(() => Cfop)
  createCfop(@Args('createCfopInput') createCfopInput: CreateCfopInput) {
    return this.cfopService.create(createCfopInput);
  }

  @Query(() => [Cfop])
  cfops() {
    return this.cfopService.findAll();
  }

  @Query(() => Cfop)
  cfop(@Args('id', { type: () => String }) id: string) {
    return this.cfopService.findOne(id);
  }

  @Mutation(() => Cfop)
  updateCfop(@Args('updateCfopInput') updateCfopInput: UpdateCfopInput) {
    return this.cfopService.update(updateCfopInput.id, updateCfopInput);
  }

  @Mutation(() => Cfop)
  removeCfop(@Args('id', { type: () => Int }) id: number) {
    return this.cfopService.remove(id);
  }
}
