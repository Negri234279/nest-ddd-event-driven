import { IEvent } from '@nestjs/cqrs'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { UserName } from 'src/Contexts/Shared/domain/User/UserName.vo'
import { UserSurname } from 'src/Contexts/Shared/domain/User/UserSurname.vo'
import { CreatedAt } from 'src/Core/domain/valueObject/CreatedAt.vo'

import { UserEmail } from '../../../Shared/domain/User/UserEmail'

export class UserAuthCreatedEvent implements IEvent {
    constructor(
        public readonly userId: UserId,
        public readonly email: UserEmail,
        public readonly name: UserName,
        public readonly surname: UserSurname,
        public readonly createdAt: CreatedAt,
    ) {}
}
