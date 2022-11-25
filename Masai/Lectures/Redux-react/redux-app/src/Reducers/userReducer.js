var initialData = {
    users:[],
}

//
const userReducer = (storeData=initialData, action)=>{ 
    switch(action.type){
        case "USER" :{
           return  {
                ...storeData,
                users:[...storeData.users, action.payload],
            }
        }

        default : {
            return storeData;
        }
    }
};

export default userReducer;