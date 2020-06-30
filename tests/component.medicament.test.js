import React from "react";
import Medicaments from "../components/medicament/Medicaments";
import { render } from '@testing-library/react-native'
import "@testing-library/jest-dom/extend-expect";

it('Medicaments components', ()=>{
    const { getByTestId } = render(<Medicaments/>);
    let flatlist = getByTestId('flatList');

    expect(flatlist).toBeDefined();

})