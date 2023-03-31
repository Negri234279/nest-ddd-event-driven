import { BadRequestException } from '@nestjs/common'
import { ValueObject } from 'src/Core/domain/valueObject/ValueObject'

export class UserRole extends ValueObject<string> {
    constructor(value: UserRoleValue | USER_ROLE) {
        super(value)
        this.ensureIsValidRole(value)
    }

    private ensureIsValidRole(value: string): void {
        if (!Object.values(USER_ROLE).includes(value as USER_ROLE)) {
            throw new BadRequestException(
                `<${UserRole.name}> does not allow the value <${value}>`,
            )
        }
    }
}

export type UserRoleValue = 'athlete' | 'coach'

export enum USER_ROLE {
    ATHLETE = 'athlete',
    COACH = 'coach',
}
