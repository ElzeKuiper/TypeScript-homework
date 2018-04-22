import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsIn } from "class-validator";

const colors = ['blue', 'red', 'green', 'magenta', 'yellow']

@Entity()
export default class Games extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @IsIn(colors)
  @Column('text', {nullable:false})
  color: string

  @Column('json', {default: [
      ['o','o','o'],
      ['o','o','o'],
      ['o','o','o']
  ]})
  board: json
}