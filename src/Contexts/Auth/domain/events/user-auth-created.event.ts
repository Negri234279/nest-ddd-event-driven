import { IEvent } from '@nestjs/cqrs'
import { UserId } from 'src/Contexts/Shared/domain/User/UserId.vo'
import { UserAuthEmailVO } from '../valueObject/UserAuthEmail'

export class UserAuthCreatedEvent implements IEvent {
    constructor(
        public readonly userId: UserId,
        public readonly email: UserAuthEmailVO,
        public readonly name: string,
        public readonly surname: string,
        public readonly createdAt: number,
    ) {}
}
