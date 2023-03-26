import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserAuthEntity } from '../../infrastructure/UserAuthEntity.entity'
import { RegisterAuthCommand } from '../commands/register-auth.command'

@CommandHandler(RegisterAuthCommand)
export class RegisterAuthHandler
    implements ICommandHandler<RegisterAuthCommand>
{
    constructor(
        @InjectRepository(UserAuthEntity)
        private readonly repository: Repository<UserAuthEntity>,
    ) {}

    async execute(command: RegisterAuthCommand): Promise<void> {
        const userEntity = new UserAuthEntity()
        userEntity.id = command.user.id
        userEntity.email = command.user.email
        userEntity.password = command.user.password
        userEntity.createdAt = command.user.createdAt
        userEntity.updatedAt = command.user.updatedAt

        await this.repository.save(userEntity)
    }
}
