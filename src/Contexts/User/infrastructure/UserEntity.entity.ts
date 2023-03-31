import { Entity } from 'typeorm'
import { Column } from 'typeorm/decorator/columns/Column'
import { PrimaryColumn } from 'typeorm/decorator/columns/PrimaryColumn'

@Entity({ name: 'users-users' })
export class UserEntity {
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
