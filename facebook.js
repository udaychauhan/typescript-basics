var FacebookProfileAbout = /** @class */ (function () {
    function FacebookProfileAbout(name, dob, mobile_number, placeOfLiving, workplace, relationshipStatus, emailId, gender, aboutYou, facebookID) {
        var _this = this;
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
        this.getName = function () {
            return _this.name;
        };
        this.getMobileNumber = function () {
            return _this.mobile_number;
        };
        this.getProfileId = function () {
            return _this.facebookID;
        };
        this.getPlaceOfLiving = function () {
            return _this.placeOfLiving;
        };
        this.getWorkPlace = function () {
            return _this.workplace;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getEmailId = function () {
            return _this.emailId;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getUserDescription = function () {
            return _this.aboutYou;
        };
        this.getDOB = function () {
            return _this.dob;
        };
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
    return FacebookProfileAbout;
}());
var userProfile = new FacebookProfileAbout("uday", "29 feb'1992", 1235647894, "Earth", "delhi", "forever alone", "watsmyid@femail.com", "male", "Hi 'sup, How you doing.", "562365efg_78965_20356");
// returns friend list from user id
var friendsList = function (userId) {
    var listFromUserID = [];
    return listFromUserID;
};
console.log("Friend List : " + friendsList(userProfile.getProfileId()));
// return a list of post made by the user
var getUserPosts = function (userId, limit) {
    if (limit) {
        var listOfPostsFromUserId_1 = new Array(limit);
    }
    var listOfPostsFromUserId = [];
    return listOfPostsFromUserId;
};
console.log("User's post: " + getUserPosts(userProfile.getProfileId(), 5));
var postOnUserWall = function (userId, message) {
    //------- post content/message on user wall
};
postOnUserWall(userProfile.getProfileId(), "A Random Message");
var getUserInfo = function () {
    var userInfo = "\n    User Name : " + userProfile.getName() + " \n\n    User Profile ID : " + userProfile.getProfileId() + " \n\n    User Email ID : " + userProfile.getEmailId() + " \n\n    User D.O.B. : " + userProfile.getDOB() + " \n\n    User Mobile Number : " + userProfile.getMobileNumber() + "\n\n    User Relationship Status : " + userProfile.getRelationshipStatus() + "\n\n    User Description : " + userProfile.getUserDescription() + "               \n    ";
    return userInfo;
};
console.log(getUserInfo());
