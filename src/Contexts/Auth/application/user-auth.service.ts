import { ConflictException, Injectable } from '@nestjs/common'
import { Logger } from '@nestjs/common/services'
import { CommandBus, EventBus } from '@nestjs/cqrs'
import { CreatedAtVO } from 'src/Core/domain/valueObject/CreatedAt.vo'
import { UpdatedAtVO } from 'src/Core/domain/valueObject/UpdatedAt.vo'

import { UserAuthCreatedEvent } from '../domain/events/user-auth-created.event'
import { UserAuthAggregate } from '../domain/UserAuthAggregate'
import { RegisterAuthDto } from '../infrastructure/dtos/RegisterAuth.dto'
import { UserAuthRepository } from '../infrastructure/repository.service'
import { RegisterAuthCommand } from './commands/register-auth.command'

@Injectable()
export class UserAuthService {
    private readonly logger = new Logger(UserAuthService.name)

    constructor(
        private readonly commandBus: CommandBus,
        private readonly eventBus: EventBus,
        private readonly repository: UserAuthRepository,
    ) {}

    async register(user: RegisterAuthDto): Promise<void> {
        this.logger.log('Check user')

        try {
            const existUserById = await this.repository.findOne(user.id)
            if (existUserById) {
                throw new ConflictException('The id is already in use')
            }

            const existUserByEmail = await this.repository.findOneByEmail(
                user.email,
            )
            if (existUserByEmail) {
                throw new ConflictException('The email is already in use')
            }

            const newDate = CreatedAtVO.create()

            const newUserAuth = new UserAuthAggregate(
                user.id,
                user.email,
                user.password,
                newDate,
                new UpdatedAtVO(newDate.value),
            )

            const command = new RegisterAuthCommand(newUserAuth)
            await this.commandBus.execute(command)

            const event = new UserAuthCreatedEvent(
                user.id,
                user.email,
                user.name,
                user.surname,
                newDate,
            )
            await this.eventBus.publish(event)
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }
}
