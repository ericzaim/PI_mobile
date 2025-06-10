import React, { useEffect, useState } from 'react';
import { getTasks } from './api';
import { TaskProps } from './tasks';
import { AuthProvider } from '../context/auth';

const TasksView: React.FC = () => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const userID = 1;


    useEffect(() => {
        getTasks(userID)
            .then(setTasks)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map((task, idx) => (
                    <li key={ idx }>{task.taskName || JSON.stringify(task)}</li>
                ))}
            </ul>
        </div>
    );
};

export default TasksView;
