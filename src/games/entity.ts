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

/*
The @IsIn validator checks if a value is in an array of allowed values.
In this case it works partually. If a user chooses a color that's not 
in the array, the server returns an error. If the user chooses a color that's in the array,
there will be a color randomly assigned to the user. If the user doesn't pick a color 
at all, he/she also gets an arror
*/
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