import { Body, Controller, Post } from '@nestjs/common'
import { Get } from '@nestjs/common/decorators'

import { UserAuthService } from '../application/user-auth.service'
import { RegisterAuthDto } from './dtos/RegisterAuth.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: UserAuthService) {}

    @Get()
    healt(): void {
        return
    }

    @Post()
    async register(@Body() user: RegisterAuthDto): Promise<any> {
        console.log('Auth register')

        await this.authService.register(user)

        console.log('Auth register sucesfully')
    }
}
