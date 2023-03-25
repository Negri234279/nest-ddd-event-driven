import { Module } from '@nestjs/common'
import { AuthController } from './infrastructure/auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserAuthEntity } from './infrastructure/UserAuthEntity.entity'
import { UserAuthRepository } from './infrastructure/repository.service'

@Module({
    imports: [TypeOrmModule.forFeature([UserAuthEntity])],
    controllers: [AuthController],
    providers: [UserAuthRepository],
})
export class AuthModule {}
