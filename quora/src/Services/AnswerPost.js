
const answerPost = (answer,qId) =>{
    const requestData = {
        questionId:qId,
        answerString: answer,
    };
    return new Promise((resolve,reject)=>{
        fetch('/feedservice/answer/',{
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

export default answerPost;