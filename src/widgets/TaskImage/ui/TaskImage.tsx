import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { TaskImageProps } from '../model/types/types';

const TaskImage: React.FC<TaskImageProps> = ({ title, content }) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const [base64Image, setBase64Image] = useState<string | null>(null);

    const generateImage = async () => {
        if (imageRef.current) {
            const canvas = await html2canvas(imageRef.current);
            const image = canvas.toDataURL('image/png');
            setBase64Image(image); 
        }
    };

    useEffect(() => {
        generateImage();
    }, [title, content]);

    return (
        <div>
            {base64Image ? (
                <img src={base64Image} alt="Задача" />
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
