import React, { useEffect, useRef } from 'react';
import { TaskImageProps } from '../model/types/types';
import { AppDispatch, RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { generateImage } from '../model/slices/imageSlice';


const TaskImage: React.FC<TaskImageProps> = ({ title, content }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    const dispatch: AppDispatch = useDispatch();
    const {imageBase64} = useSelector((state: RootState) => state.image)

    useEffect(() => {
        dispatch(generateImage(imageRef));
    }, [title, content, dispatch]);

    return (
        <div>
            {imageBase64 ? (
                <img src={imageBase64} alt="Задача" />
            ) : (
                <div ref={imageRef} style={{ display: 'inline-block', padding: '20px', backgroundColor: 'white' }}>
                    <h1 style={{ fontSize: '24px', margin: 0 }}>{title}</h1>
                    <div style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }}>{content}</div>
                </div>
            )}
        </div>
    );
};

export default TaskImage;
