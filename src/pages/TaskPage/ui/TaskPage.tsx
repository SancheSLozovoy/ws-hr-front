import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskImage from '../../../widgets/TaskImage/ui/TaskImage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { fetchData } from '../../../features/getTasks/model/slices/taskSlice';

const TaskPage = () => {
    const { documentId } = useParams<{ documentId: string }>();
    const dispatch: AppDispatch = useDispatch();

    const { loading, error, task } = useSelector((state: RootState) => state.task);

    useEffect(() => {
        if(documentId){
            dispatch(fetchData(documentId));
        }
    }, [documentId, dispatch]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {task !== null &&  (
                <TaskImage title={task[0].title} content={task[0].content[0].children[0].text} />
            )}
        </div>
    );
};

export default TaskPage;
