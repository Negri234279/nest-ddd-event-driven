import { BadRequestException } from '@nestjs/common'

import { ValueObject } from './ValueObject'

export abstract class TimestampVO extends ValueObject<number> {
    constructor(value: number) {
        super(value)
        this.ensureValueIsValidTimestamp(value)
    }

    private ensureValueIsValidTimestamp(value: number): void {
        if (isNaN(new Date(value).getTime())) {
            throw new BadRequestException(
                `<${TimestampVO.name}> does not allow the value <${value}>`,
            )
        }
    }

    toDate(): Date {
        return new Date(this.value)
    }
}
