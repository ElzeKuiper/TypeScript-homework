import {Controller, Get, Param, Post, HttpCode, Body, Put, NotFoundError} from 'routing-controllers'
import Games from './entity';
import { randomColor } from './randomcolor'
//import { moves } from './moves'


@Controller()
 export default class MainController {
  @Get('/games')
   async allGames() {
    const games = await Games.find()
     return { games }
  }
  
 @Post('/games')
  @HttpCode(201)
   createGames(
    @Body() game: Games
     ) {
      game.color = randomColor()
       return game.save()
    } 

 @Put('/games/:id')
  async updateGames(
   @Param('id') id: number,
     @Body() update: Partial<Games>
      ) {
       const games = await Games.findOne(id)
        if (!games) throw new NotFoundError('Cannot find game')
         return Games.merge(games, update).save()
      }
}