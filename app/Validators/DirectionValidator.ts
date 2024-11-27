
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DirectionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    avenue: schema.string({ trim: true })
  });

  public messages = {};
}
