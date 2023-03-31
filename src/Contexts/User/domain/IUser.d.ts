import { UserEmail } from 'src/Contexts/Shared/domain/User/UserEmail'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { UserName } from 'src/Contexts/Shared/domain/User/UserName.vo'
import { UserSurname } from 'src/Contexts/Shared/domain/User/UserSurname.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAt } from 'src/Core/domain/valueObject/UpdatedAt.vo'

export interface IUser {
    id: UserId
    email: UserEmail
    name: UserName
    surname: UserSurname
    role: UserRole
    createdAt: CreatedAt
    updatedAt: UpdatedAt
}
