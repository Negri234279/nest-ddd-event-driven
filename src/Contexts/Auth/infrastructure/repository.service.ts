import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAt } from 'src/Core/domain/valueObject/UpdatedAt.vo'
import { Repository } from 'typeorm'

import { UserAuthAggregate } from '../domain/UserAuthAggregate'
import { UserEmail } from '../../Shared/domain/User/UserEmail'
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

    async findOneByEmail(email: UserEmail): Promise<UserAuthAggregate | null> {
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

    private mapToDomain(user: UserAuthEntity): UserAuthAggregate {
        return new UserAuthAggregate(
            new UserId(user.id),
            new UserEmail(user.email),
            new UserAuthPasswordVO(user.password),
            new CreatedAt(user.createdAt),
            new UpdatedAt(user.updatedAt),
        )
    }

    private mapToEntity(user: UserAuthAggregate): UserAuthEntity {
        const userEntity = new UserAuthEntity()
        userEntity.id = user.id.value
        userEntity.email = user.email.value
        userEntity.password = user.password.value
        userEntity.createdAt = user.createdAt.value
        userEntity.updatedAt = user.updatedAt.value

        return userEntity
    }
}
