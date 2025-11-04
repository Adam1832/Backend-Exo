const { Person, Wizard} = require ('./Class');

test ('Person a 100 points de vie', () => {
    const person = new Person ('Adam');
    expect (person.lifePoints).toBe (100);
});

test ('Wizard a 80 points de vie', () => {
    const wizard = new Wizard ('Natsu');
    expect(wizard.lifePoints).toBe(80);
});

test ('Person perd 10 points de vie quand il est frappé', () => {
    person1 = new Person ('Zoro');
    person = new Person ('Sanji');
    person1.hit(person);
    expect (person.lifePoints).toBe(90)
});

test ('Wizard meurt lorsqu\' il perd tous ses pv', () => {
    const wizard = new Wizard ('Takeda');
    while (wizard.lifePoints > 0) {
        wizard.lifePoints -= 10;
    }
    expect (wizard.isDead()).toBe (true);
});