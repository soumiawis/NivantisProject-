//TDD
//mock les couche externe : repository

import {getPharmacies} from "../../service/service";



test('getPharmacies 1 ', () => {
    const repository = { getPharmacies : jest.fn };
    expect(getPharmacies(repository)).toBeDefined()
})


test('getPharmacies 2 ' , ()=>{

    const repository = { getPharmacies : jest.fn() };
    const values = [
        {
            id:1,
            name : "pharmacie de je ne sais pas ",
            adresse : "1 rue de la chance",
            lat:48.871090,
            lang:2.372073,

        }
    ]

    repository.getPharmacies.mockReturnValue(values)

    const pharmacies = getPharmacies(repository)

    expect(repository.getPharmacies.mock.calls.length).toBe(1)
    expect(pharmacies).toEqual(values)

})

