import { Logger } from '@nestjs/common/services'
import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { UserAuthCreatedEvent } from 'src/Contexts/Auth/domain/events/user-auth-created.event'

import { UserAggregate } from '../../domain/UserAggregate'
import { USER_ROLE, UserRole } from '../../domain/valueObject/UserRole.vo'
import { UserRepository } from '../../infrastructure/repository.service'

@EventsHandler(UserAuthCreatedEvent)
export class UserRegisteredEventHandler
    implements IEventHandler<UserAuthCreatedEvent>
{
    private readonly logger = new Logger(UserRegisteredEventHandler.name)

    constructor(private readonly repository: UserRepository) {}

    async handle(event: UserAuthCreatedEvent): Promise<void> {
        const userRole = new UserRole(USER_ROLE.ATHLETE)

        const newUser = new UserAggregate(
            event.userId,
            event.email,
            event.name,
            event.surname,
            userRole,
            event.createdAt,
            event.createdAt,
        )

        this.repository.save(newUser)

        this.logger.log('Saving user in user')
    }
}
