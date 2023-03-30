import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAtVO } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAtVO } from 'src/Core/domain/valueObject/UpdatedAt.vo'
import { Repository } from 'typeorm'

import { UserAuthAggregate } from '../domain/UserAuthAggregate'
import { UserAuthEmailVO } from '../domain/valueObject/UserAuthEmail'
import { UserAuthPasswordVO } from '../domain/valueObject/UserAuthPassword.vo'
import { UserAuthEntity } from './UserAuthEntity.entity'

@Injectable()
export class UserAuthRepository {
    constructor(
        @InjectRepository(UserAuthEntity)
        private readonly userRepository: Repository<UserAuthEntity>,
    ) {}

    async findOne(id: UserId): Promise<UserAuthAggregate | null> {
        const user = await this.userRepository.findOneBy({ id: id.value })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async findOneByEmail(
        email: UserAuthEmailVO,
    ): Promise<UserAuthAggregate | null> {
        const user = await this.userRepository.findOneBy({ email: email.value })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async save(user: UserAuthAggregate): Promise<void> {
        const userEntity = this.mapToEntity(user)

        await this.userRepository.save(userEntity)
    }

    private mapToDomain(userAuthEntity: UserAuthEntity): UserAuthAggregate {
        return new UserAuthAggregate(
            new UserId(userAuthEntity.id),
            new UserAuthEmailVO(userAuthEntity.email),
            new UserAuthPasswordVO(userAuthEntity.password),
            new CreatedAtVO(userAuthEntity.createdAt),
            new UpdatedAtVO(userAuthEntity.updatedAt),
        )
    }

    private mapToEntity(userAuthAggregate: UserAuthAggregate): UserAuthEntity {
        const userEntity = new UserAuthEntity()
        userEntity.id = userAuthAggregate.id.value
        userEntity.email = userAuthAggregate.email.value
        userEntity.password = userAuthAggregate.password.value
        userEntity.createdAt = userAuthAggregate.createdAt.value
        userEntity.updatedAt = userAuthAggregate.updatedAt.value

        return userEntity
    }
}
