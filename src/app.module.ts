import { Module } from '@nestjs/common'
import { AuthModule } from './Contexts/Auth/auth.module'
import { UserModule } from './Contexts/User/infrastructure/user.module'
import { DatabaseModule } from './Core/infrastructure/typeorm.module'

@Module({
    imports: [DatabaseModule, AuthModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
