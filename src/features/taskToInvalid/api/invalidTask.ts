import axios from "axios"


export const invalidTask = async (documentId: string, isValid: boolean) => {
    const response = await axios.put(`http://localhost:1337/api/task-links/${documentId}`, {
        data: {
            isValid,
        },
    });
    console.log(response)
    return response.data.data;

}