
import { faker } from '@faker-js/faker';

export function generateMockOwner(iterations) {
    const owners = []
    for(let i = 0; i < iterations; i++) {
        owners.push(createFakeOwner());
    }
    return owners
};

export function generateMockPet(iterations) {
    const pets = []
    for(let i = 0; i < iterations; i++) {
        pets.push(createFakePet());
    }
    return pets
};

function createFakeOwner() {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email()
    }
}

function createFakePet() {
    return {
        name: faker.animal.petName(),
        specie: faker.animal.type(),
        age: faker.number.int({ max: 30 }),
        birthday: faker.date.birthdate(),
        vaccines: faker.datatype.boolean()
    }
}
