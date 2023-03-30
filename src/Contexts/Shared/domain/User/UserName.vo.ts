import { BadRequestException } from '@nestjs/common'
import { ValueObject } from 'src/Core/domain/valueObject/ValueObject'

export class UserNameVO extends ValueObject<string> {
    private static readonly regex: RegExp =
        /^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ '’’-][a-zA-ZÀ-ÿ]+)*$/

    constructor(value: string) {
        super(value)
        this.ensureIsValidName(value)
    }

    private ensureIsValidName(value: string): void {
        if (!UserNameVO.regex.test(value)) {
            throw new BadRequestException(
                `<${UserNameVO.name}> does not allow the value <${value}>`,
            )
        }
    }
}
