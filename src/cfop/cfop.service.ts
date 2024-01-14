import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCfopInput } from './dto/create-cfop.input';
import { UpdateCfopInput } from './dto/update-cfop.input';
import { Cfop } from './entities/cfop.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CfopService {
  constructor(
    @InjectRepository(Cfop)
    private readonly cfopRepository: Repository<Cfop>,
  ) {}

  async create(createCfopInput: CreateCfopInput): Promise<Cfop> {
    const newCfop = this.cfopRepository.create(createCfopInput);
    await this.cfopRepository.save(newCfop)

    return newCfop;
  }

  async findAll() {
    const cfops = await this.cfopRepository.find();

    if (!cfops) return NotFoundException;
    return cfops;
  }

  async findOne(id: string) {
    const cfop = await this.cfopRepository.findOneBy({id})

    if (!cfop) {
      return new NotFoundException('CFOP not found')
    } 
    return cfop;
  }

  update(id: string, updateCfopInput: UpdateCfopInput) {
    return `This action updates a #${id} cfop`;
  }

  remove(id: number) {
    return `This action removes a #${id} cfop`;
  }
}
