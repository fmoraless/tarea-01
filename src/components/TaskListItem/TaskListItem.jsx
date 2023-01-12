import s from './style.module.css';

export const TaskListItem = ( { task, onCompleteTask}) => {
    return (
        <div className={s.TaskListItem}>
            <h3 className={s.taskName}>{task.name}</h3>
            { task.isCompleted && <p className={s.completedText}>Hecha!</p>}
            {!task.isCompleted && <button className={s.completeButton} onClick={() => onCompleteTask(task.id) }>Marcar como hecha</button>}
        </div>
    )
}
