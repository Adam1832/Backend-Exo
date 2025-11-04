const { average, getMinimum } = require('./lib');


test('average calcule la moyenne', () => {
    
    input = [11 ,-10, 10, 20]
    const resultat = average(input);
    expect(resultat).toBe(7.75);
});

test('getMinimum retourne la valeure minimale', () => {
    values = [20,349,1,0,-5,23]
    const resultatMin = getMinimum(values);
    expect(resultatMin).toBe(-5);
});

//expectedResult = 7.75;
