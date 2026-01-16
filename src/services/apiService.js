import axiosClient from "../axios/Axios";

const StudentRegistration  = {

    initializePayment : async (paymentData, callback = (data)=>{}) => {
        await axiosClient.post('/student/register', paymentData)
            .then(({data})=> {
                callback(data);
            })
    },
    
}

export default StudentRegistration; 