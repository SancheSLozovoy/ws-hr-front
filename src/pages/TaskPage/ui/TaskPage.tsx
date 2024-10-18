import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskImage from '../../../widgets/TaskImage/ui/TaskImage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { fetchData } from '../../../features/getTasks/model/slices/taskSlice';
import './TaskPage.css'

const TaskPage = () => {
    const { documentId } = useParams<{ documentId: string }>();
    const dispatch: AppDispatch = useDispatch();

    const { loading, error, task } = useSelector((state: RootState) => state.task);

    useEffect(() => {
        if (documentId) {
            dispatch(fetchData(documentId));
        }
    }, [documentId, dispatch]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className='main'>
            <a className='main__logo' href='https://worksolutions.ru'></a>
            <div className='main__inner'>
                <div className='container'>
                    <div className='main__content'>
                        <div className='main__content-task'>
                            {task !== null && (
                                <TaskImage title={task[0].title} content={task[0].content[0].children[0].text} />
                            )}
                        </div>
                        <div className='main__content-instruction'>
                            <p className='instuction__item'>На выполнение задания дается 40 минут.</p>
                            <p>Не забудьте включить запись экрана. По окончании решения выложите запись в облако и отправьте ссылку на нее ответным письмом</p>
                            <p>Не перезагружайте страницу – ссылка на задание является одноразовой.</p>
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className='footer__content'>
                        <div></div>
                        <div className='footer__content-company'>
                            2024 © Work Solutions
                        </div>
                        <div className='footer__content-img'>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
};

export default TaskPage;
