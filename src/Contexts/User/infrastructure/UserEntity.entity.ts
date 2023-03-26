import { Entity } from 'typeorm'
import { Column } from 'typeorm/decorator/columns/Column'
import { PrimaryColumn } from 'typeorm/decorator/columns/PrimaryColumn'

import { IUser } from '../domain/IUser'

@Entity({ name: 'users-users' })
export class UserEntity implements IUser {
    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    role: string

    @Column({ type: 'int8' })
    createdAt: number

    @Column({ type: 'int8' })
    updatedAt: number
}
