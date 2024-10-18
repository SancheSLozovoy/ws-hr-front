import axios from "axios";
import { invalidTask } from "../../taskToInvalid/api/invalidTask";

const fetchTaskLink = async (documentId: string) => {
    try {
        const taskLinkResponse = await axios.get(`http://localhost:1337/api/task-links/${documentId}`);
        
        const taskId = taskLinkResponse.data.data.id;
        const isValid = taskLinkResponse.data.data.isValid;

        if(isValid){
            const response = await axios.get(`http://localhost:1337/api/tasks?filters[task][$eq]=${taskId}`);

            // invalidTask(documentId, false)

            console.log(isValid)
            return response.data.data

        }
    } catch (err) {
        console.error(err);
    }
};

export {fetchTaskLink}


