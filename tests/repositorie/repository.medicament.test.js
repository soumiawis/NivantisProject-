import * as repo from '../../repository/repositorieV1'
import {medicaments} from '../../data/medicaments'


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




