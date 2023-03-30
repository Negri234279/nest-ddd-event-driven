import { Transform } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { UserNameVO } from 'src/Contexts/Shared/domain/User/UserName.vo'
import { UserSurnameVO } from 'src/Contexts/Shared/domain/User/UserSurname.vo'

import { UserAuthEmailVO } from '../../domain/valueObject/UserAuthEmail'
import { UserAuthPasswordVO } from '../../domain/valueObject/UserAuthPassword.vo'

export class RegisterAuthDto {
    @Transform(({ value }) => new UserId(value))
    @IsNotEmpty()
    id: UserId

    @Transform(({ value }) => new UserNameVO(value))
    @IsNotEmpty()
    name: UserNameVO

    @Transform(({ value }) => new UserSurnameVO(value))
    @IsNotEmpty()
    surname: UserSurnameVO

    @Transform(({ value }) => new UserAuthEmailVO(value))
    @IsNotEmpty()
    email: UserAuthEmailVO

    @Transform(({ value }) => new UserAuthPasswordVO(value))
    @IsNotEmpty()
    password: UserAuthPasswordVO
}
