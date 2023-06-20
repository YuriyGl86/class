import Character from './character';

export default class Undead extends Character {
  constructor(name, type = 'undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
