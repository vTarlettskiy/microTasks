import * as React from 'react';
import {adidasArr, ItemType} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";
import {abibasArr} from "./Abibas";

type CrossModels = {
    [key: string]: ItemType[]
}

const crossModel: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr,
    abibas: abibasArr
}

export const Model = () => {

    const {model, id} = useParams()

    const ourModel = model ?  crossModel[model].find(m => m.id === Number(id)) : null

    return (
        ourModel ? (
            <div>
                <h2>{ourModel.model}</h2>
                <h3>{ourModel.collection}</h3>
                <h3>{ourModel.price}</h3>
                <img src={ourModel.picture}/>
            </div>
        ) : (
            <h2>Такой модели нет</h2>
        )
    );
};