import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserAggregate } from '../domain/UserAggregate'
import { UserEntity } from './UserEntity.entity'

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async findOne(id: string): Promise<UserAggregate | null> {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async findOneByEmail(email: string): Promise<UserAggregate | null> {
        const user = await this.userRepository.findOneBy({ email })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async save(user: UserAggregate): Promise<void> {
        const userEntity = new UserEntity()
        userEntity.id = user.id
        userEntity.email = user.email
        userEntity.name = user.name
        userEntity.surname = user.surname
        userEntity.role = user.role
        userEntity.createdAt = user.createdAt
        userEntity.updatedAt = user.updatedAt

        await this.userRepository.save(userEntity)
    }

    private mapToDomain(userAuthEntity: UserEntity): UserAggregate {
        return new UserAggregate(
            userAuthEntity.id,
            userAuthEntity.email,
            userAuthEntity.name,
            userAuthEntity.surname,
            userAuthEntity.role,
            userAuthEntity.createdAt,
            userAuthEntity.updatedAt,
        )
    }
}
