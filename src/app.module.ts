import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'

import { AuthModule } from './Contexts/Auth/auth.module'
import { UserModule } from './Contexts/User/user.module'
import { LoggerMiddleware } from './Core/infrastructure/middleware/logger.middleware'
import { DatabaseModule } from './Core/infrastructure/typeorm.module'

@Module({
    imports: [DatabaseModule, AuthModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*')
    }
}
