import axiosClient from "../axios/Axios";

const StudentRegistration  = {

    initializeUserData : async (userData, callback = (data)=>{}) => {
        await axiosClient.post('/user', userData)
            .then(({data})=> {
                callback(data);
            })
    },

    initializeCourseData : async (courseData, callback = (data)=>{}) => {
        await axiosClient.post('/user/profile', courseData)
            .then(({data})=> {
                callback(data);
            })
    },

    submitFull: async (formData) => {
        return axiosClient.post('/storeUser', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        })
    },
    
}

export default StudentRegistration; 