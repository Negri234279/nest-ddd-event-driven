import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserAggregate } from '../domain/UserAggregate'
import { UserEntity } from './UserEntity.entity'
import { UserEmail } from 'src/Contexts/Shared/domain/User/UserEmail'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAt } from 'src/Core/domain/valueObject/UpdatedAt.vo'
import { UserName } from 'src/Contexts/Shared/domain/User/UserName.vo'
import { UserSurname } from 'src/Contexts/Shared/domain/User/UserSurname.vo'
import { UserRole, UserRoleValue } from '../domain/valueObject/UserRole.vo'

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async findOne(id: UserId): Promise<UserAggregate | null> {
        const user = await this.userRepository.findOneBy({ id: id.value })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async findOneByEmail(email: UserEmail): Promise<UserAggregate | null> {
        const user = await this.userRepository.findOneBy({ email: email.value })
        if (!user) {
            return null
        }

        return this.mapToDomain(user)
    }

    async save(user: UserAggregate): Promise<void> {
        const userEntity = this.mapToEntity(user)

        await this.userRepository.save(userEntity)
    }

    private mapToDomain(user: UserEntity): UserAggregate {
        return new UserAggregate(
            new UserId(user.id),
            new UserEmail(user.email),
            new UserName(user.name),
            new UserSurname(user.surname),
            new UserRole(user.role as UserRoleValue),
            new CreatedAt(user.createdAt),
            new UpdatedAt(user.updatedAt),
        )
    }

    private mapToEntity(user: UserAggregate): UserEntity {
        const userEntity = new UserEntity()
        userEntity.id = user.id.value
        userEntity.email = user.email.value
        userEntity.name = user.name.value
        userEntity.surname = user.surname.value
        userEntity.role = user.role.value
        userEntity.createdAt = user.createdAt.value
        userEntity.updatedAt = user.updatedAt.value

        return userEntity
    }
}
