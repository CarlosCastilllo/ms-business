
import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Direction extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public avenue: string;
  
  @column()
  public street: string;

  @column()
  public neighborhood: string;

  @column()
  public municipality_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
