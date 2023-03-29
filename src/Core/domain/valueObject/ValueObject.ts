import { BadRequestException } from '@nestjs/common'

type Primitives = string | string | number | boolean | boolean | Date

export abstract class ValueObject<T extends Primitives> {
    readonly value: T

    constructor(value: T) {
        this.value = value
        this.ensureValueIsDefined(value)
    }

    private ensureValueIsDefined(value: T): void {
        if (value === null || value === undefined) {
            throw new BadRequestException('Value must be defined')
        }
    }

    equals(valueObject: ValueObject<T>): boolean {
        return (
            valueObject.constructor.name === this.constructor.name &&
            valueObject.value === this.value
        )
    }

    toString(): string {
        return this.value.toString()
    }
}
