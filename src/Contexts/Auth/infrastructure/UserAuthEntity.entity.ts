import { Entity } from 'typeorm'
import { Column } from 'typeorm/decorator/columns/Column'
import { PrimaryColumn } from 'typeorm/decorator/columns/PrimaryColumn'
import { IUserAuth } from '../domain/IUserAuth'

@Entity({ name: 'users-auth' })
export class UserAuthEntity implements IUserAuth {
    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ type: 'timestamp' })
    createdAt: Date

    @Column({ type: 'timestamp' })
    updatedAt: Date
}