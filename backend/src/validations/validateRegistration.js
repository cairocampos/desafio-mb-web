import { body } from 'express-validator';

export const validateRegistration = [
  body('type',  'field type is required').exists().toUpperCase(),
  body('type', 'field type must be PF or PJ').matches(new RegExp('PF|PJ', 'i')),
  body('name',  'field name is required').exists(),
  body('cpf_cnpj',  'field cpf_cnpj is required').exists(),
  body('cpf_cnpj').customSanitizer(val => val.replace(/\D/g, '')),
  body('birthdate',  'field birthdate is required').exists(),
  body('birthdate',  'field birthdate is invalid').isDate({
    format: 'yyyy-MM-dd'
  }),
  body('phone_number',  'field phone_number is required').exists().escape(),
  body('phone_number').customSanitizer(val => val.replace(/\D/g, '')),
  body('password',  'field password is required').exists(),
  body('password',  'password field must have at leat 8 digits').isLength({min: 8}),
]