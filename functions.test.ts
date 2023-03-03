const {shuffleArray} = require('./utils')

let testData = [
    {
    id : 1,
    name : "Gizem",
    imgAddress: 'https://robohash.org/hammer',
    health : 100,
    attacks:[
        {
            id: 0, 
            damage: 25
        }, 
        {
            id: 1, 
            damage: 30
        }
    ]
}
]
    

describe('shuffleArray should', () => {
    test('returns an array',()=>{
        expect(shuffleArray(testData)).toBeInstanceOf(Array)
    })
    test("returns an array of the same length as the argument sent in",()=>{
        expect(shuffleArray(testData)).toHaveLength(1)
    })
})
