const cookieGet = () =>{
    return new Promise((resolve,reject)=>{
        fetch('/userservice/validate',{
            method: 'GET',
           credentials: 'same-origin'
        }).then((response)=>{
            response.json().then((feeds)=>{
                resolve(feeds);
            }).catch((error)=>{
              reject(error);
            })
        }
    ).catch((error) => {
        reject(error);
            
        })
    });
};

export default cookieGet;