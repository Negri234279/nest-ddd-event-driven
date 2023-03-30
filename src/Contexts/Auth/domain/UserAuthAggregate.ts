import { AggregateRoot } from '@nestjs/cqrs'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAtVO } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAtVO } from 'src/Core/domain/valueObject/UpdatedAt.vo'

import { IUserAuth } from './IUserAuth'
import { UserAuthEmailVO } from './valueObject/UserAuthEmail'
import { UserAuthPasswordVO } from './valueObject/UserAuthPassword.vo'

export class UserAuthAggregate extends AggregateRoot implements IUserAuth {
    public id: UserId
    public email: UserAuthEmailVO
    public password: UserAuthPasswordVO
    public createdAt: CreatedAtVO
    public updatedAt: UpdatedAtVO

    constructor(
        id: UserId,
        email: UserAuthEmailVO,
        password: UserAuthPasswordVO,
        createdAt: CreatedAtVO,
        updatedAt: UpdatedAtVO,
    ) {
        super()
        this.id = id
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
