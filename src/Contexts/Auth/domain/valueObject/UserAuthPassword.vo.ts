import { BadRequestException } from '@nestjs/common'
import { compare, hash } from 'bcrypt'
import { ValueObject } from 'src/Core/domain/valueObject/ValueObject'

export class UserAuthPasswordVO extends ValueObject<string> {
    private static readonly regex: RegExp =
        /^(?=.*[A-Z])(?=.*[\d!@#$%^&*()_+~\-=?<>[\]{}|\\,.:;"'`/])(?=.*[a-z]).{6,50}$/
    private static readonly HASH_SALT: number = 10

    constructor(value: string) {
        super(value)
        this.ensureIsValidPassword(value)
    }

    static async hash(value: string): Promise<UserAuthPasswordVO> {
        this.ensureIsValidPasswordPlaint(value)

        const hashedPassword = await hash(value, this.HASH_SALT)

        return new UserAuthPasswordVO(hashedPassword)
    }

    async compare(plainPassword: UserAuthPasswordVO): Promise<boolean> {
        return await compare(plainPassword.value, this.value)
    }

    private ensureIsValidPassword(value: string): void {
        if (typeof value !== 'string') {
            throw new BadRequestException(
                `<${UserAuthPasswordVO.name}> does not allow the value <${value}>`,
            )
        }
    }

    private static ensureIsValidPasswordPlaint(value: string): void {
        if (!this.regex.test(value)) {
            throw new BadRequestException(
                `<${UserAuthPasswordVO.name}> does not allow the value <${value}>`,
            )
        }
    }
}
