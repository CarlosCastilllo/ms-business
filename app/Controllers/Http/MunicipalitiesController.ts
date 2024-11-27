
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Municipality from 'App/Models/Municipality';
import MunicipalityValidator from 'App/Validators/MunicipalityValidator';

export default class MunicipalitiesController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await Municipality.findOrFail(params.id);
    } else {
      const data = request.all();
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        return await Municipality.query().paginate(page, perPage);
      } else {
        return await Municipality.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    await request.validate(MunicipalityValidator);
    const body = request.body();
    return await Municipality.create(body);
  }

  public async update({ params, request }: HttpContextContract) {
    const record = await Municipality.findOrFail(params.id);
    const body = request.body();
    
    record.name = body.name;
    record.population = body.population;
    record.department_id = body.department_id;

    return await record.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const record = await Municipality.findOrFail(params.id);
    await record.delete();
    response.status(204);
  }
}
