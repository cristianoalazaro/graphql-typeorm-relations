import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { TaxRate } from 'src/tax-rate/entities/tax-rate.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'cfop'})
export class Cfop {
  @PrimaryColumn()
  @Field(() => ID)
  id: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => TaxRate, taxRate => taxRate.cfopIntraState)
  taxRatesIntraState: TaxRate[];

  @OneToMany(() => TaxRate, taxRate => taxRate.cfopIntraState)
  taxRatesCfopInterState: TaxRate[]
}
