import { TaskListItem } from "../TaskListItem/TaskListItem";
import s from './style.module.css';


export const TaskList = ({ tasks, onCompleteTask }) => {
    return (
        <div className={s.taskList}>
            {tasks.map(task => (
                <TaskListItem
                        key={task.id}
                        task={task} 
                        onCompleteTask={onCompleteTask} />
            ))}
        </div>
    )
}