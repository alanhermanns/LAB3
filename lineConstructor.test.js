const lineConstructor = require('./lineConstructor');

describe('line constructor', () => {
    it('return a truth', () => {
        expect(lineConstructor()).toBeTruthy();
    })
    it('should equal an object', async () => {
        expect(await lineConstructor()).toMatchObject({});
    })
})