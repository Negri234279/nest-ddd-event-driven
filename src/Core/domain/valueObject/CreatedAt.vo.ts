import { TimestampVO } from './Timestamp.vo'

export class CreatedAt extends TimestampVO {
    static create(): CreatedAt {
        const newDate = new Date().getTime()

        return new CreatedAt(newDate)
    }
}
