import * as repo from '../../repository/repositorieV1'
import {medicaments} from '../../data/medicaments'
import {pharmacies} from "../../data/pharmacies";


//mock les couche externe : repository

test('Tous les medicaments', ()=>{
    let all = repo.getMedicaments();
    let value = medicaments[0];

    expect(all).toBeDefined()
    expect(all.length).toEqual(medicaments.length)
    expect(all).toEqual(expect.arrayContaining([value]))
})

test('Medicaments by id', ()=>{
    let medicament = repo.getMedicamentById(1);
    let expected = medicaments[0];

    expect(medicament).toBeDefined()
    expect(medicament.id).toEqual(1)
    expect(medicament).toEqual(expect.objectContaining(expected))
})

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



