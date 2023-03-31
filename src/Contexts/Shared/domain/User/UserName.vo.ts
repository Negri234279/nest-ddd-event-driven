import { BadRequestException } from '@nestjs/common'
import { ValueObject } from 'src/Core/domain/valueObject/ValueObject'

export class UserName extends ValueObject<string> {
    private static readonly regex: RegExp =
        /^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ '’’-][a-zA-ZÀ-ÿ]+)*$/

    constructor(value: string) {
        super(value)
        this.ensureIsValidName(value)
    }

    private ensureIsValidName(value: string): void {
        if (!UserName.regex.test(value)) {
            throw new BadRequestException(
                `<${UserName.name}> does not allow the value <${value}>`,
            )
        }
    }
}
