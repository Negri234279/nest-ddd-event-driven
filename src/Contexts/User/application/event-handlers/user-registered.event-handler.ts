import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { UserAuthCreatedEvent } from 'src/Contexts/Auth/domain/events/user-auth-created.event'

import { UserAggregate } from '../../domain/UserAggregate'
import { UserRepository } from '../../infrastructure/repository.service'

@EventsHandler(UserAuthCreatedEvent)
export class UserRegisteredEventHandler
    implements IEventHandler<UserAuthCreatedEvent>
{
    constructor(private readonly repository: UserRepository) {}

    async handle(event: UserAuthCreatedEvent): Promise<void> {
        console.log('UserRegisteredEventHandler')

        const newUser = new UserAggregate(
            event.userId,
            event.email,
            event.name,
            event.surname,
            'athlete',
            event.createdAt,
            event.createdAt,
        )

        this.repository.save(newUser)
    }
}
