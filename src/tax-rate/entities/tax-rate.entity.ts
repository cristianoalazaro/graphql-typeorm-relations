import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Cfop } from 'src/cfop/entities/cfop.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'tax_rate'})
export class TaxRate {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  descripyion: string;

  @Field()
  @Column()
  cfopIntraStateId: string;

  @Field()
  @Column()
  cfopInterStateId: string;

  @Field()
  @ManyToOne(() => Cfop, cfop => cfop.taxRatesIntraState)
  cfopIntraState: Cfop;
  
  @Field()
  @ManyToOne(() => Cfop, cfop => cfop.taxRatesCfopInterState)
  //@JoinColumn({name: 'cfopIntraStateId'})
  cfopInterState: Cfop;

  /*@ManyToOne(() => Cfop, cfop => cfop.taxRatesCfopInterState)
  //@JoinColumn({name: 'cfopInterStateId'})
  cfopInterState: Cfop;*/
}
