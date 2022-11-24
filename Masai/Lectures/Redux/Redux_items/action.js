import { myStore } from "./Store.js";

export const myAction = (data)=>{
    myStore.dispatch({
        type:"INC_COUNT",
        info:data,
    });
}

