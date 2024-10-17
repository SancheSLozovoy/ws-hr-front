import axios from "axios";
import { useParams } from "react-router-dom";


const fetchTaskLink = async (documentId: string) => {
    try {
        const taskLinkResponse = await axios.get(`http://localhost:1337/api/task-links/${documentId}`);
        
        const taskId = taskLinkResponse.data.data.id;

        const response = await axios.get(`http://localhost:1337/api/tasks?filters[task][$eq]=${taskId}`);
        
        return response.data.data
    } catch (err) {
        console.error(err);
    }
};

export {fetchTaskLink}


