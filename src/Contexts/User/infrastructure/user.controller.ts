import { Controller, Put } from '@nestjs/common'

@Controller('user')
export class UserController {
    // constructor(private readonly authService: any) {}
    @Put()
    register(): Promise<void> {
        console.log('User updated')

        return
    }
}
