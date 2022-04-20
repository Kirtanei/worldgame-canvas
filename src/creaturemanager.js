import Fish from './creatures/fish.js';

export default class CreatureManager {

  constructor(game) {
    this.game = game;
  }

  initialize(){

    let waterTiles = this.game.map.getType('Water');
    let f = new Fish(this.game,waterTiles[Math.floor(Math.random()*waterTiles.length)]);
    this.game.add(f);

  }


}
