import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const data = request.only(["name", "username"]);
    console.log(data)
    User
  }
}
