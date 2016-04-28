function placeObjects(object, count) {
    var randomField, randomColumn;
    for (var i = 0; i < count; ) {
        randomField = getRandom(1, world.length - 1);
        randomColumn = getRandom(1, world.length - 1);

        /*если по случайному расположению ячейка пустая, то располагаем объект*/
        if (world[randomField][randomColumn] == freePlace) {
            world[randomField][randomColumn] = object.design;
            /*если размещаемый объект - животное, то сохранить его координаты*/
            if (object == Animal) {
                if (count == 1) {
                    object.positions[0][object.count] = randomField;
                    object.positions[1][object.count] = randomColumn;
                } else {
                    object.positions[0][i] = randomField;
                    object.positions[1][i] = randomColumn;
                }
            }
            i++;
        }
    }
}