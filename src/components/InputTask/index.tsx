import React from 'react';
import style from './index.module.scss';

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id:string) => void;
    onEdit: (id:string , value: string) => void;
    onRemove: (id:string) => void;
}

export const InputTask:React.FC<InputTaskProps> = ({
    id,
    title,
    onDone,
    onEdit,
    onRemove,
 }) => {

    return (
        <div className={style.inputTask}>
            {title}
        </div>
    )
}