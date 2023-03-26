import { IEvent } from '@nestjs/cqrs'

export class UserAuthCreatedEvent implements IEvent {
    constructor(
        public readonly userId: string,
        public readonly email: string,
        public readonly name: string,
        public readonly surname: string,
        public readonly createdAt: number,
    ) {}
}
