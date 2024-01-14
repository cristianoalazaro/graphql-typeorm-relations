import { Module } from '@nestjs/common';
import { CfopService } from './cfop.service';
import { CfopResolver } from './cfop.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cfop } from './entities/cfop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cfop])],
  providers: [CfopResolver, CfopService],
})
export class CfopModule {}
