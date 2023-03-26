import { Module } from '@nestjs/common'
import { CqrsModule, EventBus } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { EventHandlers } from './application/event-handlers'
import { UserRepository } from './infrastructure/repository.service'
import { UserController } from './infrastructure/user.controller'
import { UserEntity } from './infrastructure/UserEntity.entity'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [EventBus, ...EventHandlers, UserRepository],
})
export class UserModule {}
