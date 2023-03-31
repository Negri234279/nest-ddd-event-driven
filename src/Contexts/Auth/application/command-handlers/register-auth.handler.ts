import { Logger } from '@nestjs/common'
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'

import { UserAuthRepository } from '../../infrastructure/repository.service'
import { RegisterAuthCommand } from '../commands/register-auth.command'

@CommandHandler(RegisterAuthCommand)
export class RegisterAuthHandler
    implements ICommandHandler<RegisterAuthCommand>
{
    private readonly logger = new Logger(RegisterAuthHandler.name)

    constructor(private readonly repository: UserAuthRepository) {}

    async execute(command: RegisterAuthCommand): Promise<void> {
        await this.repository.save(command.user)

        this.logger.log('Saving user in auth')
    }
}
