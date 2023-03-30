import { TimestampVO } from './Timestamp.vo'

export class UpdatedAtVO extends TimestampVO {
    static create(): UpdatedAtVO {
        const newDate = new Date().getTime()

        return new UpdatedAtVO(newDate)
    }
}
