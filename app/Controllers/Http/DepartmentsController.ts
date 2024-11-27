
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Department from 'App/Models/Department';
import DepartmentValidator from 'App/Validators/DepartmentValidator';

export default class DepartmentsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await Department.findOrFail(params.id);
    } else {
      const data = request.all();
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        return await Department.query().paginate(page, perPage);
      } else {
        return await Department.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    await request.validate(DepartmentValidator);
    const body = request.body();
    return await Department.create(body);
  }

  public async update({ params, request }: HttpContextContract) {
    const record = await Department.findOrFail(params.id);
    const body = request.body();
    
    record.name = body.name;
    record.population = body.population;

    return await record.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const record = await Department.findOrFail(params.id);
    await record.delete();
    response.status(204);
  }
}
