import { Entity } from 'typeorm'
import { Column } from 'typeorm/decorator/columns/Column'
import { PrimaryColumn } from 'typeorm/decorator/columns/PrimaryColumn'

@Entity({ name: 'auth-users' })
export class UserAuthEntity {
    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ type: 'int8' })
    createdAt: number

    @Column({ type: 'int8' })
    updatedAt: number
}
