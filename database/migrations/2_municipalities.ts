
import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Municipalities extends BaseSchema {
  protected tableName = 'municipalities';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name')
      table.integer('population')
      table.integer('department_id').unsigned().references('id').inTable('departments.id').onDelete('CASCADE');
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
