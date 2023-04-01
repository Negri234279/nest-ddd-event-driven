import { Body, Controller, Logger, Post } from '@nestjs/common'
import { Get } from '@nestjs/common/decorators'

import { UserAuthService } from '../application/user-auth.service'
import { RegisterAuthDto } from './dtos/RegisterAuth.dto'

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name)

    constructor(private readonly authService: UserAuthService) {}

    @Get()
    healt(): void {
        return
    }

    @Post('register')
    async register(@Body() user: RegisterAuthDto): Promise<any> {
        try {
            this.logger.log('Iniciando registro')

            await this.authService.register(user)

            this.logger.log('sucesfully')
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
