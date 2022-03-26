// class Dog {
//     constructor(mass, height, color) {
//         this.mass = mass;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new Dog(6,2,'black')
//
// console.log(rex)

class Animal {
    constructor(type, gender, color, voiceText) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.voicrText = voiceText;
    }

    voice(){
        console.log(this.voicrText)
    }
}

class Dog extends Animal{
    constructor(type, gender, color, voiceText, name, purposeText) {
        super(type, gender, color, voiceText);
        this.name = name;
        this.purposeText = purposeText;
    }
    purpose(){
        console.log(`Dog: ${this.name}\nPurpose: ${this.purposeText}`)
    }
}

const rex = new Dog(
    'domestic',
    'male',
    'white',
    'gaf gaf',
    'rex',
    'security'
)
rex.purpose()

const mily = new Dog (
    'domestic',
    'female',
    'pink',
    'tiyf tiyf',
    'mily',
    'beauty'
)
console.log(mily)

//

class house {
    constructor(homeOwner, size, height, color, floors, place, design) {
        this.homeOwner = homeOwner;
        this.size = size;
        this.height = height;
        this.color = color;
        this.floors = floors;
        this.place = place;
        this.design = design;
    }

}
class houseCharacteristic extends house{
    constructor(homeOwner, size, height, color, floors, place, design, windows, doors, doorColor, panorama, roof, roofColor) {
        super(homeOwner, size, height, color, floors, place, design);
        this.windows = windows;
        this.doors = doors;
        this.doorsColor = doorColor;
        this.panorama = panorama:
        this.roof = roof;
        this.roofColor = roofColor;
    }
}
class houseInsideCharacteristic extends houseCharacteristic{
    constructor(homeOwner, size, height, color, floors, place, design,windows, doors, doorColor, panorama, roof, roofColor, wallColor, heightOfFloor, rooms, furniture, halls, security, insideDesign) {
        super(homeOwner, size, height, color, floors, place, design,windows, doors, doorColor, panorama, roof, roofColor);
        this.wallColor  = wallColor;
        this.heightOfFloor = heightOfFloor;
        this.rooms = rooms;
        this.furniture = furniture;
        this.halls = halls;
        this.security = security;
        this.insideDesign = insideDesign;
    }

}

const hannah = new houseInsideCharacteristic(
    'Hannah',
    'huge',
    '12m',
    'purple',
    3,
    'city',
    'highTech',
    15,
    3,
    'brawn',
    'true',
    'hip roof',
    'green',
    'white',
    '3m',
    11,
    'new',
    3,
    'well protected',
    'highTech',
)

console.log(hannah)

