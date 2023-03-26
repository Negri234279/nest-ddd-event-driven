import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CommandHandlers } from './application/command-handlers'
import { Commands } from './application/commands'
import { UserAuthService } from './application/user-auth.service'
import { AuthController } from './infrastructure/auth.controller'
import { UserAuthRepository } from './infrastructure/repository.service'
import { UserAuthEntity } from './infrastructure/UserAuthEntity.entity'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([UserAuthEntity])],
    controllers: [AuthController],
    providers: [
        UserAuthService,
        ...Commands,
        ...CommandHandlers,
        UserAuthRepository,
    ],
})
export class AuthModule {}
