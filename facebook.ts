class FacebookProfileAbout {

    constructor(private name:string,private dob:string,private mobile_number:number,private placeOfLiving:string,
        private workplace:string,private relationshipStatus:string
    ,private emailId:string,private gender:string,private aboutYou:string,private facebookID:string){
       
        this.name = name;
        this.dob = dob;
        this.mobile_number = mobile_number;
        this.placeOfLiving = placeOfLiving;
        this.workplace = workplace;
        this.relationshipStatus = relationshipStatus;
        this.emailId = emailId;
        this.gender = gender;
        this.aboutYou = aboutYou;
        this.facebookID = facebookID;
     }

   
     getName=()=>{
        return this.name;
    }

    getMobileNumber = ()=>{
        return this.mobile_number;
    }

    getProfileId = () =>{
        return this.facebookID
    }

    getPlaceOfLiving = () => {
        return this.placeOfLiving;
    }

    getWorkPlace = () => {
        return this.workplace;
    }

    getRelationshipStatus = ()=>{
        return this.relationshipStatus;
    }

    getEmailId = ()=>{
        return this.emailId;
    }

    getGender = () =>{
        return this.gender;
    }

    getUserDescription = () => {
        return this.aboutYou;
    }
   

    getDOB = () => {
        return this.dob;
    }

    
}


let  userProfile = new FacebookProfileAbout("uday","29 feb'1992",1235647894,"Earth",
"delhi","forever alone","watsmyid@femail.com","male","Hi 'sup, How you doing.","562365efg_78965_20356");

// returns friend list from user id
let friendsList = (userId:string):string[]=>{
    let listFromUserID:string[] = [];
    return listFromUserID;
}
console.log("Friend List : " + friendsList(userProfile.getProfileId()));

// return a list of post made by the user
let getUserPosts = (userId:string,limit?:number):string[]=>{
    if(limit){
        let listOfPostsFromUserId = new Array<string>(limit);
    }

    let listOfPostsFromUserId:string[] = [];
    return listOfPostsFromUserId;
}

console.log("User's post: "+ getUserPosts(userProfile.getProfileId(),5));

let postOnUserWall=(userId:string,message:string)=>{
    //------- post content/message on user wall
}
postOnUserWall(userProfile.getProfileId(),"A Random Message");

let getUserInfo = () : string => {
    let userInfo = `
    User Name : ${userProfile.getName()} \n
    User Profile ID : ${userProfile.getProfileId()} \n
    User Email ID : ${userProfile.getEmailId()} \n
    User D.O.B. : ${userProfile.getDOB()} \n
    User Mobile Number : ${userProfile.getMobileNumber()}\n
    User Relationship Status : ${userProfile.getRelationshipStatus()}\n
    User Description : ${userProfile.getUserDescription()}               
    `
    return userInfo;
   
}

console.log(getUserInfo());


