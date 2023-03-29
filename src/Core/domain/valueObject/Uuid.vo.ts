import { BadRequestException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { test } from 'uuid-random'

import { ValueObject } from './ValueObject'

export class UuidVO extends ValueObject<string> {
    constructor(value: string) {
        super(value)
        this.ensureIsValidUuid(value)
    }

    static random(): UuidVO {
        return new UuidVO(uuid())
    }

    private ensureIsValidUuid(value: string): void {
        if (!test(value)) {
            throw new BadRequestException(
                `<${UuidVO.name}> does not allow the value <${value}>`,
            )
        }
    }
}
