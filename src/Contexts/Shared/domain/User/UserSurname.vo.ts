import { BadRequestException } from '@nestjs/common'
import { ValueObject } from 'src/Core/domain/valueObject/ValueObject'

export class UserSurnameVO extends ValueObject<string> {
    private static readonly regex: RegExp =
        /^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ '-][a-zA-ZÀ-ÿ]+)*$/

    constructor(value: string) {
        super(value)
        this.ensureIsValidName(value)
    }

    private ensureIsValidName(value: string): void {
        if (!UserSurnameVO.regex.test(value)) {
            throw new BadRequestException(
                `<${UserSurnameVO.name}> does not allow the value <${value}>`,
            )
        }
    }
}
