import {Controller, Get, Param, Post, HttpCode, Body, Put, NotFoundError} from 'routing-controllers'
import Games from './entity';


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
const randomColor = () => {
  const colors = ['blue', 'red', 'green', 'magneta', 'yellow']
  return colors[Math.floor(Math.random() * colors.length)]
}

// const moves = (board1, board2) => 
//   board1
//     .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
//     .reduce((a, b) => a.concat(b))
//     .length
