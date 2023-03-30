import { TimestampVO } from './Timestamp.vo'

export class CreatedAtVO extends TimestampVO {
    static create(): CreatedAtVO {
        const newDate = new Date().getTime()

        return new CreatedAtVO(newDate)
    }
}
