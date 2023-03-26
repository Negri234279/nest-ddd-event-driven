import { AggregateRoot } from '@nestjs/cqrs'

import { IUser } from './IUser'

export class UserAggregate extends AggregateRoot implements IUser {
    public id: string
    public email: string
    public name: string
    public surname: string
    public role: string
    public createdAt: number
    public updatedAt: number

    constructor(
        id: string,
        email: string,
        name: string,
        surname: string,
        role: string,
        createdAt: number,
        updatedAt: number,
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
