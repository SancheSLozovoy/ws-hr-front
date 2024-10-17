import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TaskImage from '../../../widgets/TaskImage/ui/TaskImage';
import { fetchTaskLink } from '../api/getTaskLinkApi';

const TaskPage = () => {
    const { documentId } = useParams<{ documentId: string }>();
    const [task, setTask] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [content, setContent] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            if (documentId) { 
                try {
                    const taskData = await fetchTaskLink(documentId);
                    console.log(taskData[0].content[0].children[0].text)
                    setTask(taskData[0].title);
                    setContent(taskData[0].content[0].children[0].text)
                    setLoading(false);
                } catch (err) {
                    setError('Ошибка при загрузке задачи');
                    setLoading(false);
                }
            } else {
                setError('Неверный documentId');
                setLoading(false);
            }
        };

        fetchData();
    }, [documentId]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {task && (
                <TaskImage title={task} content={content} />
            )}
        </div>
    );
};

export default TaskPage;
