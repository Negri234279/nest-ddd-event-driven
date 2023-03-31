import { TimestampVO } from './Timestamp.vo'

export class UpdatedAt extends TimestampVO {
    static create(): UpdatedAt {
        const newDate = new Date().getTime()

        return new UpdatedAt(newDate)
    }
}
