import { Body, ConflictException, Controller, Post } from '@nestjs/common'
import { Get } from '@nestjs/common/decorators'
import { UserAuthAggregate } from '../domain/UserAuthAggregate'
import { RegisterAuthDto } from './dtos/RegisterAuth.dto'
import { UserAuthRepository } from './repository.service'

@Controller('auth')
export class AuthController {
    constructor(private readonly repository: UserAuthRepository) {}

    @Get()
    healt(): void {
        return
    }

    @Post()
    async register(@Body() user: RegisterAuthDto): Promise<any> {
        console.log('Auth register')

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

        const newUserAuth = new UserAuthAggregate(
            user.id,
            user.email,
            user.password,
            new Date(),
            new Date(),
        )

        await this.repository.save(newUserAuth)
    }
}
