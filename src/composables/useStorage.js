import { projectStorage } from "@/firebase/config";
import { ref } from 'vue';

const { user } = getUser();

const useStorage = () => {
    const error = ref(null);
    const url = ref(null);
    const filePath = ref(null);

    const uploadImage = async (file) =>{
        filePath.value = `covers/${user.value.uid}/${file.name}`;
        const storageRef = projectStorage.ref(filePath.value);

        try {
            // pass the selected file through the storage method
            const res = await storageRef.put(file);
            // save the downloadable url in the url ref function
            url.value = res.ref.getDownloadURL();
        } catch (error) {
            // log the error message
            console.log(error.message);
            // set the value to the message given when there is an error
            error.value = error.message;
        }
    }

    return { error, url, filePath , uploadImage }
}

export default useStorage;