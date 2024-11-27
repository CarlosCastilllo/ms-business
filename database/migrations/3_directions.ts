
import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Directions extends BaseSchema {
  protected tableName = 'directions';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('avenue')
      table.string('street')
      table.string('neighborhood')
      table.integer('municipality_id').unsigned().references('id').inTable('municipalities.id').onDelete('CASCADE'); 
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
