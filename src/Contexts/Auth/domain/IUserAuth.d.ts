import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAt } from 'src/Core/domain/valueObject/UpdatedAt.vo'

import { UserEmail } from '../../Shared/domain/User/UserEmail'
import { UserAuthPasswordVO } from './valueObject/UserAuthPassword.vo'

export interface IUserAuth {
    id: UserId
    email: UserEmail
    password: UserAuthPasswordVO
    createdAt: CreatedAt
    updatedAt: UpdatedAt
}
