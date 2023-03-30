import { BadRequestException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'

import { ValueObject } from './ValueObject'

export class UuidVO extends ValueObject<string> {
    private readonly regex: RegExp =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    constructor(value: string) {
        super(value)
        this.ensureIsValidUuid(value)
    }

    static random(): UuidVO {
        return new UuidVO(uuid())
    }

    private ensureIsValidUuid(value: string): void {
        if (!this.regex.test(value)) {
            throw new BadRequestException(
                `<${UuidVO.name}> does not allow the value <${value}>`,
            )
        }
    }
}
