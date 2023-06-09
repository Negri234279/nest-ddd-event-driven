import { AggregateRoot } from '@nestjs/cqrs'

import { IUserAuth } from './IUserAuth'

export class UserAuthAggregate extends AggregateRoot implements IUserAuth {
    public id: string
    public email: string
    public password: string
    public createdAt: number
    public updatedAt: number

    constructor(
        id: string,
        email: string,
        password: string,
        createdAt: number,
        updatedAt: number,
    ) {
        super()
        this.id = id
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
