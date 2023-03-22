import { validationResult } from 'express-validator';

export class UserController {
  #service;
  constructor(userService) {
    this.#service = userService
  }

  async register(request, response) {
    const errors = validationResult(request)
    if(!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array()
      })
    }

    const user = await this.#service.register({
      type: request.body.type,
      name: request.body.name,
      cpf_cnpj: request.body.cpf_cnpj,
      birthdate: request.body.birthdate,
      password: request.body.password,
      phone_number: request.body.phone_number
    });
    return response.status(201).json(user);
  }
}