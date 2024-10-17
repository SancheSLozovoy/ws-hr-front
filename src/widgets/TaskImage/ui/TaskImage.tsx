import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { TaskImageProps } from '../model/types/types';

const TaskImage: React.FC<TaskImageProps> = ({ title, content }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    const generateImage = async () => {
        if (imageRef.current) {
            const canvas = await html2canvas(imageRef.current);
            const base64Image = canvas.toDataURL('image/png');
            console.log(base64Image); 
        }
    };

    useEffect(() => {
        generateImage();
    }, [title, content]);

    return (
        <div ref={imageRef} style={{ display: 'inline-block', padding: '20px', backgroundColor: 'white' }}>
            <h1 style={{ fontSize: '24px', margin: 0 }}>{title}</h1>
            <div style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }}>{content}</div>
        </div>
    );
};

export default TaskImage;
