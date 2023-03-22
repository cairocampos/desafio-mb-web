import { prisma } from "../database/index.js"
import bcrypt from 'bcrypt'

export class UserService {
  async register(data) {
    const password = await bcrypt.hash(data.password, 8)
    const user = await prisma.user.create({
      data: {
        ...data,
        password,
        birthdate: new Date(data.birthdate)
      }
    })
    return user;
  }
}