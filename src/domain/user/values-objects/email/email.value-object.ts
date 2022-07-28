import isEmail from 'validator/lib/isEmail'
import { Result, ValueObject } from '../../../shared'

export interface EmailValueObjectProps {
   value: string
}

export class EmailValueObject extends ValueObject<EmailValueObjectProps> {
   private constructor(props: EmailValueObjectProps) {
      super(props)
   }

   get value(): string {
      return this.props.value
   }

   public static create(email: string): Result<EmailValueObject> {
      if (!isEmail(email)) {
         return Result.fail<EmailValueObject>('Invalid Email')
      }
      return Result.ok<EmailValueObject>(
         new EmailValueObject({
            value: email.toLowerCase(),
         }),
      )
   }
}
