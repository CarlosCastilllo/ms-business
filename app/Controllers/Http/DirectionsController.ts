
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Direction from 'App/Models/Direction';
import DirectionValidator from 'App/Validators/DirectionValidator';

export default class DirectionsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await Direction.findOrFail(params.id);
    } else {
      const data = request.all();
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        return await Direction.query().paginate(page, perPage);
      } else {
        return await Direction.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    await request.validate(DirectionValidator);
    const body = request.body();
    return await Direction.create(body);
  }

  public async update({ params, request }: HttpContextContract) {
    const record = await Direction.findOrFail(params.id);
    const body = request.body();
    
    record.avenue = body.avenue;
    record.street = body.street;
    record.neighborhood = body.neighborhood;
    record.municipality_id = body.municipality_id;  

    return await record.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const record = await Direction.findOrFail(params.id);
    await record.delete();
    response.status(204);
  }
}
