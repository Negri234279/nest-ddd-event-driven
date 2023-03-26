import { IsNotEmpty, IsEmail, IsString, IsUUID } from 'class-validator'

export class RegisterAuthDto {
    @IsUUID('4')
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    surname: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}
