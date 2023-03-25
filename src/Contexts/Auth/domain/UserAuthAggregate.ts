import { AggregateRoot } from '@nestjs/cqrs'
import { IUserAuth } from './IUserAuth'

export class UserAuthAggregate extends AggregateRoot implements IUserAuth {
    public id: string
    public email: string
    public password: string
    public createdAt: Date
    public updatedAt: Date

    constructor(
        id: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super()
        this.id = id
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
