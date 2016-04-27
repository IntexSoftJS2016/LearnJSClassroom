function createEntity(type, health) {
    /*создаёт и возвращает сущность с указанными параметрами*/
    var entity = {};
    entity["type"] = type;
    entity["health"] = health;
    entity["flag"] = 0;
    return entity;
}

function moveAnimals() {
    /*перемещает всех травоядных и хищников на одну клетку, которая не является
     стеной либо животным того же класса*/
    for (var iterator = WORLD_WALL_LENGTH + 1;
         iterator < world.length - WORLD_WALL_LENGTH - 1; iterator++) {
        if (world[iterator]["type"] === "0" ||
            world[iterator]["type"] === "&") {
            if (world[iterator]["flag"] === 0) {
                world[iterator]["flag"] = 1;
                makeStep(iterator);
            }
        }
    }
}

function makeStep(index) {
    /*отвратительный алгоритм выбора случайного направления, позже переделаю*/
    var entityType = world[index]["type"];

    for (; ;) {
        var moveIndex = randomInteger(1, 4);

        switch (moveIndex) {
            case 1 :
                if (world[index + WORLD_WALL_LENGTH]["type"] !== entityType &&
                    world[index + WORLD_WALL_LENGTH]["type"] !== "#") {
                    world[index + WORLD_WALL_LENGTH] = world[index];
                    world[index] = createEntity(" ");
                    return;
                }
            case 2 :
                if (world[index - WORLD_WALL_LENGTH]["type"] !== entityType &&
                    world[index - WORLD_WALL_LENGTH]["type"] !== "#") {
                    world[index - WORLD_WALL_LENGTH] = world[index];
                    world[index] = createEntity(" ");
                    return;
                }
            case 3 :
                if (world[index + 1]["type"] !== entityType &&
                    world[index + 1]["type"] !== "#") {
                    world[index + 1] = world[index];
                    world[index] = createEntity(" ");
                    return;
                }
            case 4 :
                if (world[index - 1]["type"] !== entityType &&
                    world[index - 1]["type"] !== "#") {
                    world[index - 1] = world[index];
                    world[index] = createEntity(" ");
                    return;
                }
        }
    }
}

function resetFlags() {
    /*сбрасывает флаги, чтобы можно было реализовать возможность хода животного
     один раз за несколько циклов обновления мира, и чтобы одно животное не
     ходило несколько раз за один цикл*/
    for (var iterator = WORLD_WALL_LENGTH + 1;
         iterator < world.length - WORLD_WALL_LENGTH - 1; iterator++) {
        if (world[iterator]["type"] === "0" ||
            world[iterator]["type"] === "&") {
            if (world[iterator]["flag"] === 1) {
                world[iterator]["flag"] = 0;
            }
        }
    }
}