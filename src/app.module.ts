import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaxRateModule } from './tax-rate/tax-rate.module';
import { CfopModule } from './cfop/cfop.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydatabase.sqlite',
      entities: [join(process.cwd(), 'src/**/entities/*.entity{.ts}')],
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TaxRateModule,
    CfopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
