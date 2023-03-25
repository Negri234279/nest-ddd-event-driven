import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '127.0.0.1',
            port: 5433,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
        }),
    ],
})
export class DatabaseModule {}
