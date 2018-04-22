import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Games extends BaseEntity {

  static findById(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable:false})
  color: string

  @Column('json', {default: [
      ['o','o','o'],
      ['o','o','o'],
      ['o','o','o']
  ]})
  board: json
}