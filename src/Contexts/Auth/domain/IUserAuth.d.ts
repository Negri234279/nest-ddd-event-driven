import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { CreatedAtVO } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAtVO } from 'src/Core/domain/valueObject/UpdatedAt.vo'

import { UserAuthEmailVO } from './valueObject/UserAuthEmail'
import { UserAuthPasswordVO } from './valueObject/UserAuthPassword.vo'

export interface IUserAuth {
    id: UserId
    email: UserAuthEmailVO
    password: UserAuthPasswordVO
    createdAt: CreatedAtVO
    updatedAt: UpdatedAtVO
}
