import {pharmacies} from "../data/pharmacies";

const getMedicaments = (repository) => {
    return repository.getMedicaments() ;
}


const getPharmacies = (repository) => {
    return repository.getPharmacies();
}

export {getMedicaments, getPharmacies}