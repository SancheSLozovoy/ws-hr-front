export interface TaskImageProps {
    title: string;
    content: string;
}

export interface ImageState {
    imageBase64: string | null;
}

export const initialState: ImageState = {
    imageBase64: null,
}
