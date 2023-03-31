import { AggregateRoot } from '@nestjs/cqrs'
import { UserEmail } from 'src/Contexts/Shared/domain/User/UserEmail'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { UserName } from 'src/Contexts/Shared/domain/User/UserName.vo'
import { UserSurname } from 'src/Contexts/Shared/domain/User/UserSurname.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAt } from 'src/Core/domain/valueObject/UpdatedAt.vo'

import { IUser } from './IUser'
import { UserRole } from './valueObject/UserRole.vo'

export class UserAggregate extends AggregateRoot implements IUser {
    public id: UserId
    public email: UserEmail
    public name: UserName
    public surname: UserSurname
    public role: UserRole
    public createdAt: CreatedAt
    public updatedAt: UpdatedAt

    constructor(
        id: UserId,
        email: UserEmail,
        name: UserName,
        surname: UserSurname,
        role: UserRole,
        createdAt: CreatedAt,
        updatedAt: UpdatedAt,
    ) {
        super()
        this.id = id
        this.email = email
        this.name = name
        this.surname = surname
        this.role = role
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
