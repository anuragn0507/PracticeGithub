var myData = {
    count:1,
};

export const myReducer = (storedata = myData, action) =>{

    switch(action.type){
        case "INC_COUNT":{
            return{
                ...storedata,
                count:storedata.count + action.info,
            }
        }
    }
    return storedata;
}
