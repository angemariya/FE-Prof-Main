// Данные
const mockSinger = {
    skill: 10,
};

const mockGuitarPlayer = {
    skill: 10,
    guitarCount: 8,
};

// ES5
const Singer = function ({skill}) {
    this._skill = skill;
};

Singer.prototype.start = function () {
    console.log('Sing...');
};

// ES6
class GuitarPlayer {
    constructor({skill, guitarCount}) {
        this._skill = skill;
        this._guitarCount = guitarCount;
    }

    start() {
        console.log('Play...');
    }
}

const singer = new Singer(mockSinger);
const guitarPlayer = new GuitarPlayer(mockGuitarPlayer);

for (const property in singer) {
    console.log('Вокалист', property);
}

for (const property in guitarPlayer) {
    console.log('Гитарист', property);
}
//  У class методы не перечисляемые.