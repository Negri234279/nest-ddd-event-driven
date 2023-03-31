import { AggregateRoot } from '@nestjs/cqrs'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAt } from 'src/Core/domain/valueObject/UpdatedAt.vo'

import { IUserAuth } from './IUserAuth'
import { UserEmail } from '../../Shared/domain/User/UserEmail'
import { UserAuthPasswordVO } from './valueObject/UserAuthPassword.vo'

export class UserAuthAggregate extends AggregateRoot implements IUserAuth {
    public id: UserId
    public email: UserEmail
    public password: UserAuthPasswordVO
    public createdAt: CreatedAt
    public updatedAt: UpdatedAt

    constructor(
        id: UserId,
        email: UserEmail,
        password: UserAuthPasswordVO,
        createdAt: CreatedAt,
        updatedAt: UpdatedAt,
    ) {
        super()
        this.id = id
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
