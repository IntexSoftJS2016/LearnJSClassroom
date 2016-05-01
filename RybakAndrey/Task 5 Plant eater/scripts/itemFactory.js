function getItem(type, config){
    switch(type){
      case ItemTypes.WALL:
        return new Wall();
      case ItemTypes.FLOWER:
        return new Flower(config.position, config.polygon);
      case ItemTypes.RABBIT:
        return new Rabbit(config.position, config.polygon);
      case ItemTypes.WOLF:
        return new Wolf(config.position, config.polygon);
      default:
        return new Empty(config.position, config.polygon);
    }
}
