var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, videoId, views, likes, dislikes, publishedDate, category, license, uploaderName, uploaderLink, videoDescription) {
        var _this = this;
        this.title = title;
        this.videoId = videoId;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.publishedDate = publishedDate;
        this.category = category;
        this.license = license;
        this.uploaderName = uploaderName;
        this.uploaderLink = uploaderLink;
        this.videoDescription = videoDescription;
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getPublishedDate = function () {
            return _this.publishedDate;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getLicense = function () {
            return _this.license;
        };
        this.getUploaderName = function () {
            return _this.uploaderName;
        };
        this.getUploaderLink = function () {
            return _this.uploaderLink;
        };
        this.getVideoId = function () {
            return _this.videoId;
        };
        this.getVideoDescription = function () {
            return _this.videoDescription;
        };
        this.title = title;
        this.videoId = videoId;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.publishedDate = publishedDate;
        this.category = category;
        this.license = license;
        this.uploaderName = uploaderName;
        this.uploaderLink = uploaderLink;
        this.videoDescription = videoDescription;
    }
    return YoutubeVideo;
}());
var mathsMensurationVideo = new YoutubeVideo("Mensuration Theory", "985623568ef3265", 111111, 200, 1, "23rd May, 2014", "education", "youtube license", "Uday", "uday.youtube.com", "THIS IS A DESCRIPTION OF THE VIDEO THAT YOU ARE WATCHING.");
var getComments = function (videoId) {
    // returns 
    var commentList = [];
    return commentList;
};
var commentsForVideo = getComments(mathsMensurationVideo.getVideoId());
console.log(" Comments for video are : " + commentsForVideo);
var getNextVideo = function (videoId) {
    //-- here we check from the present video id see what next video it holds
    var nextVideo = "NEXT VIDEO";
    return nextVideo;
};
console.log("Next video is " + getNextVideo(mathsMensurationVideo.getVideoId()));
var getNextVideoList = function (videoId) {
    //-- here we check from the present video id see what next video names it holds
    var nextVideoArray = [];
    return nextVideoArray;
};
console.log(" Recommended Next Video List :  " + getNextVideoList(mathsMensurationVideo.getVideoId()));
var videoProperties = function () {
    var propertyString = "\n    \n Video Name : " + mathsMensurationVideo.getTitle() + " \n    \n Video Id : " + mathsMensurationVideo.getVideoId() + " \n    \n Video Likes : " + mathsMensurationVideo.getLikes() + " \n    \n Video Dislikes :  " + mathsMensurationVideo.getDislikes() + "\n    \n Video Published Date : " + mathsMensurationVideo.getPublishedDate() + "\n    \n Video Uploader Name : " + mathsMensurationVideo.getUploaderName() + "\n    \n Video Uploader Link : " + mathsMensurationVideo.getUploaderLink() + "\n    \n Video Type : " + mathsMensurationVideo.getCategory() + "\n    \n Video License : " + mathsMensurationVideo.getLicense() + "\n    \n Video Description : " + mathsMensurationVideo.getVideoDescription();
    return propertyString;
};
console.log(videoProperties());
