
const signupPost = (fname, lname, email, password, mobile, dob, gender) =>{
    const requestData = {
        username:fname,
        firstName: fname,
        lastName: lname,
        email: email, 
        password:password, 
        phone:mobile,
        dob: dob, 
        gender:gender
    };
    return new Promise((resolve, reject)=>{
        alert("hello")
        fetch("/userservice/user/", {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(requestData),
            headers: {
                'content-type': 'application/json',
                },
            credentials: 'same-origin'
        }).then((response) => {
            if (response.status === 200){
                response.json().then((body)=>{
                    resolve(body);
                }).catch((error) => {
                    reject(error);
                })
            }
            else{
                reject({error:"Wrong respoonse code.!"})
            }
        }).catch((error) =>{
            reject(error);
        })
    });
};

export default signupPost;