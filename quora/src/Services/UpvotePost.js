
const upvotePost = (answerId) =>{
    const requestData = {
        answerId:answerId
    };
    return new Promise((resolve,reject)=>{
        fetch('/feedservice/upvote/',{
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers: {
                'content-type': 'application/json',
                },
            credentials: 'same-origin'
        }).then((response)=>{
            if (response.status === 200){
                resolve();
        }
        else{
            reject({error:"wrong response code..."});
        }
    }).catch((error) => {
        reject(error);
            
        })
    });
};

export default upvotePost;