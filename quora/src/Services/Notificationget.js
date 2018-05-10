const notification = () =>{
    return new Promise((resolve,reject)=>{
        fetch('/feedservice/notification',{
            method: 'GET',
           credentials: 'same-origin'
        }).then((response)=>{
            response.json().then((notification_data)=>{
                resolve(notification_data);
            }).catch((error)=>{
              reject(error);
            })
        }
    ).catch((error) => {
        reject(error);
            
        })
    });
};

export default notification;