import * as yup from 'yup';

const tooShortMessage = 'min length — ${min} symbol';
const tooLongMessage = 'max length — ${max} symbol';
const invalidCharsMessage = 'Only Latin letters (A-Z, a-z) are allowed';

export const nameValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, tooShortMessage)
    .max(12, tooLongMessage)
    .matches(/^[A-Za-z]+$/, invalidCharsMessage)
    .required('*')
});
