import React from 'react';
import {useTodoStore} from "../../stores/useTodoStore";
import {InputPlus} from "../../components/InputPlus";
import style from './index.module.scss';
import {InputTask} from "../../components/InputTask";

export const App:React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask,
    ] = useTodoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ]);

    // Создать Task
    const addTask = (title: string) => {
        if (title) {
            createTask(title);
        }
    };

  return (
    <article className={style.article}>
        <h1 className={style.articleTitle}>Список Задач</h1>
        <section className={style.articleSection}>
            <InputPlus onAdd={addTask} />
        </section>
        <section className={style.articleSection}>
            {!tasks.length && (
                <p style={{marginTop: '1rem'}}>Нет задач.</p>
            )}
            {tasks.map((task) => (
                <InputTask
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    onDone={createTask}
                    onEdit={updateTask}
                    onRemove={removeTask}
                />
            ))}

        </section>
    </article>
  );
}
