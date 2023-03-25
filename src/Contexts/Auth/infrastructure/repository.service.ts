import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserAuthAggregate } from '../domain/UserAuthAggregate'
import { UserAuthEntity } from './UserAuthEntity.entity'

@Injectable()
export class UserAuthRepository {
    constructor(
        @InjectRepository(UserAuthEntity)
        private readonly userRepository: Repository<UserAuthEntity>,
    ) {}

    async findOne(id: string): Promise<UserAuthAggregate | null> {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async findOneByEmail(email: string): Promise<UserAuthAggregate | null> {
        const user = await this.userRepository.findOneBy({ email })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async save(user: UserAuthAggregate): Promise<void> {
        const userEntity = new UserAuthEntity()
        userEntity.id = user.id
        userEntity.email = user.email
        userEntity.password = user.password
        userEntity.createdAt = user.createdAt
        userEntity.updatedAt = user.updatedAt

        await this.userRepository.save(userEntity)
    }

    private mapToDomain(userAuthEntity: UserAuthEntity): UserAuthAggregate {
        return new UserAuthAggregate(
            userAuthEntity.id,
            userAuthEntity.email,
            userAuthEntity.password,
            userAuthEntity.createdAt,
            userAuthEntity.updatedAt,
        )
    }
}
