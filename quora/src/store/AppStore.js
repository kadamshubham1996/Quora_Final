import Reflux from 'reflux'
import AppActions from '../actions/AppActions'
import login from '../Services/LoginService'
import questionPost from '../Services/QuestionPost'
import loadFeeds from '../Services/loadsFeeds'
import answerPost from '../Services/AnswerPost'
import upvotePost from '../Services/UpvotePost'
import signupPost from '../Services/SignupPost'
import downvotePost from '../Services/DownvotePost'
import cookieget from '../Services/cookie'
import notification from '../Services/Notificationget'
const AppStore = Reflux.createStore({
  listenables: [AppActions],

  onShowLoginPopup() {
    this.trigger({action: "showLoginPopup"})
  },

  onHideLoginPopup() {
    this.trigger({action: "hideLoginPopup"});
  },
  onLogin(username, password) {
    login(username, password).then((userInfo)=>{
      alert("Log In Success..!");

      this.trigger({action:"setUser", user:userInfo})
    }).catch((error)=>{
      console.log(error)
    })
  },

  onShowSignUpPopup() {
    this.trigger({action: "showSignUpPopup"})
  }, 

  onSignUp(fname, lname, email, password, mobile, dob, gender ){
    //alert("First Name: "+fname+" "+"Last Name: "+lname+" "+"Email: "+email+" "+"Password: "+password+" "+"Mobile: "+mobile+" "+"Date of Birth: "+dob+" "+"Gender: "+gender);
    signupPost(fname, lname, email, password, mobile, dob, gender).then(()=>{
      this.trigger({action:"showSignUpPopup"})
     }).catch((error)=>{
       console.log(error)
     })  
  },

  onHideSignupPopup(){
    this.trigger({action:"hideSignupPopup"})
  },

  onAddQue(question){
    questionPost(question).then(()=>{
     this.trigger({action:"addQuestion"})
    }).catch((error)=>{
      console.log(error)
    })
  },


  onShowAddQPopup(){
    this.trigger({action:"showAddQuePopup"})
  },

  onHideAddQuePopup(){
    this.trigger({action: "hideAddQuePopup"})
  },

  onLoadFeeds(){
    loadFeeds().then((feeds)=>{
      this.trigger({action:"loadFeeds", feeds:feeds})
    }).catch((error)=>{

    })
  },
  onAddAns(answer,qId){ 
    answerPost(answer,qId).then(()=>{
      alert("Done..")
    this.trigger({action:"addAnswer"})
   }).catch((error)=>{
     console.log(error)
   })
 },
 onAddUpvote(answerId){
  upvotePost(answerId).then(()=>{
    this.trigger({action:"addupvote"})
   }).catch((error)=>{
     console.log(error)
   })
 },
 onAddDownvote(answerId){
   downvotePost(answerId).then(()=>{
    this.trigger({action:"adddownvote"})
   }).catch((error)=>{
     console.log(error)
   })
 },
 onCookie()
 {
   cookieget().then((body)=>
 {
  this.trigger({action:"setUser",user:body})
}).catch((error)=>{
  console.log(error)
})
 },
 onShownotification()
 {
   notification().then((notification_data)=>
   {
     console.log(notification_data)
     this.trigger({action:"setnotification", notification:notification_data})
   }).catch((error)=>{
     console.log(error)
   })
 }

})
export default AppStore;
