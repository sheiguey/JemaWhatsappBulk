import axios from 'axios';
import baseUrl from "../config"

async function getCampagnes(){
  const res = await fetch(`${baseUrl}/push_campaigns`);
  const data = await res.json();
  return data;
}

async function getCampagnesWiithExistUsersAndTC(){
  const res = await fetch(`${baseUrl}/pseudo_campaigns`);
  const data = await res.json();
  return data;
}



async function getCampagnebyId(id){
    const res = await fetch(`${baseUrl}/single-campaign/${id}`);
    const data =await res.json();
    return data;
}


async function addCampagne(campaign){
  return axios.post(`${baseUrl}/push_campaign`, campaign, {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type for FormData
      },
    })
    
/*     try{
      return await fetch(`${baseUrl}/push_campaign`,{
        headers: {
        "Content-Type": "multipart/form-data",  
      },
        method:"post",
        body:campaign
    }) 
    }catch(error){
      console.log(error);
      return error
    } */
  
   
}



export {
    getCampagnes,
    getCampagnebyId,
    addCampagne,
    getCampagnesWiithExistUsersAndTC
}
  

