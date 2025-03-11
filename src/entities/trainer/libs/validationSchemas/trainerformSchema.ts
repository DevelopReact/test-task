import * as yup from 'yup';
//validationSchemas
import { nameValidationSchema } from '@/shared/validationSchemas/nameValidationSchema';

export const trainerFormSchema = yup.object().shape({
  firstName: nameValidationSchema.fields.name as yup.StringSchema<string>,
  sureName: nameValidationSchema.fields.name as yup.StringSchema<string>
});
