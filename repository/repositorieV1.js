import {medicaments} from '../data/medicaments';
import {pharmacies} from "../data/pharmacies";


const  getMedicaments = () =>{
    return medicaments;
}

const getMedicamentById = (id) => {
    return getMedicaments().find(d => d.id === id);
}

const getPharmacies = () => {
    return pharmacies;
}

const getPharmacieById = (id) => {
    return getPharmacies().find(d => d.id === id);
}

export {getMedicaments, getMedicamentById, getPharmacies, getPharmacieById}