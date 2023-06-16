export default class Character {
  constructor(name, type, attack, defence) {
    if (Character.checkName(name) && Character.checkType(type)) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    }
  }

  static checkName(name) {
    if (typeof name !== 'string' || name.length > 10 || name.length < 2) {
      throw new Error('имя должно быть строкой от 2 до 10 символов');
    } else {
      return true;
    }
  }

  static checkType(type) {
    const charackters = ['bowerman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];
    if (typeof type !== 'string' || !(charackters.includes(type))) {
      throw new Error('тип персонажа должен быть один из Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    } else {
      return true;
    }
  }
}
