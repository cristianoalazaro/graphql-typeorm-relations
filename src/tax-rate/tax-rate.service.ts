import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaxRateInput } from './dto/create-tax-rate.input';
import { UpdateTaxRateInput } from './dto/update-tax-rate.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxRate } from './entities/tax-rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxRateService {
  constructor(
    @InjectRepository(TaxRate)
    private readonly taxRateRepository: Repository<TaxRate>
  ) {}

  async create(createTaxRateInput: CreateTaxRateInput) {
    const newTaxRate = this.taxRateRepository.create(createTaxRateInput);
    const taxRate = await this.taxRateRepository.save(newTaxRate);

    return await this.findOne(taxRate.id)
  }

  async findAll() {
    return await this.taxRateRepository.find({
      relations: {
        cfopIntraState: true,
        cfopInterState: true,
      }
    });
  }

  async findOne(id: string) {
    const cfop = await this.taxRateRepository.findOne({
      where: {
        id
      },
      relations: {
        cfopIntraState: true,
        cfopInterState: true,
      }
    })
    
    if (!cfop) {
      return new NotFoundException('CFOP not found');
    }

    return cfop;
  }

  async update(updateTaxRateInput: UpdateTaxRateInput) {
    await this.taxRateRepository.update(updateTaxRateInput.id, updateTaxRateInput);

    return await this.findOne(updateTaxRateInput.id);
  }

  remove(id: number) {
    return `This action removes a #${id} taxRate`;
  }
}
