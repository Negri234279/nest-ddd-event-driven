import { BadRequestException } from '@nestjs/common'
import { ValueObject } from 'src/Core/domain/valueObject/ValueObject'

export class UserEmail extends ValueObject<string> {
    private static readonly regex: RegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    constructor(value: string) {
        super(value)
        this.ensureIsValidPassword(value)
    }

    private ensureIsValidPassword(value: string): void {
        if (!UserEmail.regex.test(value)) {
            throw new BadRequestException(
                `<${UserEmail.name}> does not allow the value <${value}>`,
            )
        }
    }
}