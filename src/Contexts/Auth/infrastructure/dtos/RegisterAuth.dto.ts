import { Transform } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { UserName } from 'src/Contexts/Shared/domain/User/UserName.vo'
import { UserSurname } from 'src/Contexts/Shared/domain/User/UserSurname.vo'

import { UserEmail } from '../../../Shared/domain/User/UserEmail'
import { UserAuthPasswordVO } from '../../domain/valueObject/UserAuthPassword.vo'

export class RegisterAuthDto {
    @Transform(({ value }) => new UserId(value))
    @IsNotEmpty()
    id: UserId

    @Transform(({ value }) => new UserName(value))
    @IsNotEmpty()
    name: UserName

    @Transform(({ value }) => new UserSurname(value))
    @IsNotEmpty()
    surname: UserSurname

    @Transform(({ value }) => new UserEmail(value))
    @IsNotEmpty()
    email: UserEmail

    @Transform(({ value }) => new UserAuthPasswordVO(value))
    @IsNotEmpty()
    password: UserAuthPasswordVO
}
