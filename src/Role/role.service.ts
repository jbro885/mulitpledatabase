import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(RoleEntity) private roleRepository: Repository<RoleEntity>) { }

    async showAll() {
        return await this.roleRepository.find();
    }
}
