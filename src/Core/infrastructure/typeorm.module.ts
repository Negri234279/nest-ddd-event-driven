import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            useFactory: () =>
                ({
                    type: process.env.DB_TYPE,
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT) || 5432,
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    synchronize: process.env.NODE_ENV !== 'production',
                    autoLoadEntities: process.env.NODE_ENV !== 'production',
                } as DataSourceOptions),
        }),
    ],
})
export class DatabaseModule {}
