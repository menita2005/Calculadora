import { useEffect, useRef, useState } from "react";

enum Operator{
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '÷',
}

export const useCalculator = () =>{
    //Hooks
    const[number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const lastOperation = useRef<Operator>();;


    const  clean = () => {
        setNumber('0'),
        setPrevNumber('0');
        lastOperation.current = undefined;

    };

    const deleteOperation = () => {
        let currentSing = '';
        let temporalNumber = number;

        if (number.includes('-')){
            currentSing = '-';
            temporalNumber = number.substring(1);
        }

        if(temporalNumber.length>1){
            return setNumber(currentSing + temporalNumber.slice(0, -1));
        }

        setNumber('0');

    }

    const toggleSing = () => {
        if (number.includes('-')){
            return setNumber(number.replace('-', ''));
        }
        setNumber('-' + number);
    }

    const buildNumber = (numberString: string ) => {

        if (number.includes('.') && numberString === '.'){
            return;
        }

        if (number.startsWith('0') || number.startsWith('-0')){
        //Punto decimal
        if (numberString ==='.'){
            return setNumber(number + numberString);
        }
        
        // Evaluar si es otro cero y no hay punto
        if (numberString === '0' && number.includes('.')){
            return setNumber(number + numberString);
        }

        //Evaluar si es diferente de cero, no hay punto y si es el primer numero. 
        if (numberString !=='0' && !number.includes('.')){
            return setNumber(numberString);
        }

        //Evitar 0000000
        if (numberString ==='0' && !number.includes('.')){
            return ;
        }
            return setNumber(number + numberString);
        }
        setNumber(number + numberString);
    };

     //Return
     return{
        number,
        prevNumber,

        buildNumber,
        toggleSing,
        clean,
        deleteOperation,


    };
};