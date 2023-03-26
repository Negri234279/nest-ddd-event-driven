import { ICommand } from '@nestjs/cqrs'

import { UserAuthAggregate } from '../../domain/UserAuthAggregate'

export class RegisterAuthCommand implements ICommand {
    constructor(public readonly user: UserAuthAggregate) {}
}
