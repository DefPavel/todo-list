import React, {useCallback, useState} from 'react';

import style from './index.module.scss';
import {IoAdd} from "react-icons/all";

interface InputPlusProps {
    onAdd: (title: string) => void;
}


export const InputPlus:React.FC<InputPlusProps> = ({onAdd}) => {

    const [inputValue , setInputValue] = useState('');
    const addTask = useCallback(() => {
        onAdd(inputValue);
        // Очищаем input после созадния
        setInputValue('');
    }, [inputValue])


    return (
        <div className={style.inputPlus}>
            <input
                type={"text"}
                className={style.inputPlusValue}
                value={inputValue}
                onChange={(e) =>{
                    setInputValue(e.target.value);
                }}
                onKeyDown={(e) =>{
                    if (e.key === 'Enter') {
                        addTask();
                    }
                }}
                placeholder={"Новая задача"}
            />
            <button
                disabled={!inputValue}
                type={"button"}
                aria-label={"Add"}
                className={style.inputPlusButton}
                onClick={addTask}>
                <IoAdd
                    color={"white"}
                    size={30}/>
            </button>
        </div>
    )
}
