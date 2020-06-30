import * as repo from '../../repository/repositorieV1'
import {pharmacies} from "../../data/pharmacies";


test('Tous les Pharmacies', ()=>{
    let all = repo.getPharmacies();
    let value = pharmacies[0];

    expect(all).toBeDefined()
    expect(all.length).toEqual(pharmacies.length)
    expect(all).toEqual(expect.arrayContaining([value]))
})

test('Pharmacie by id', ()=>{
    let pharmacie = repo.getPharmacieById(1);
    let value = pharmacies[0];

    expect(pharmacie).toBeDefined()
    expect(pharmacie.id).toEqual(1)
    expect(pharmacie).toEqual(expect.objectContaining(value))
})



