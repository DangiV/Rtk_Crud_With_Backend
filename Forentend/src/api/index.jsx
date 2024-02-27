import Chance from 'chance'

const chance = Chance()

export const fakeUserData = () =>{
    console.log(chance.name({middle : true}));
}

fakeUserData()
