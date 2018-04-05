class YoutubeVideo {

    constructor(private title:string,private videoId:string,private views:number,private likes:number,private dislikes:number,private publishedDate:string
    ,private category:string,private license:string,private uploaderName:string,private uploaderLink:string,private videoDescription:string){
       
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

    getTitle=()=>{
        return this.title;
    }

    getViews = ()=>{
        return this.views;
    }

    getLikes = () => {
        return this.likes;
    }

    getDislikes = () => {
        return this.dislikes;
    }

    getPublishedDate = ()=>{
        return this.publishedDate;
    }

    getCategory = ()=>{
        return this.category;
    }

    getLicense = () =>{
        return this.license;
    }

    getUploaderName = () => {
        return this.uploaderName;
    }

    getUploaderLink = () => {
        return this.uploaderLink;
    }

    getVideoId = () => {
        return this.videoId;
    }

    getVideoDescription = () => {
        return this.videoDescription;
    }
}

let mathsMensurationVideo = new YoutubeVideo("Mensuration Theory","985623568ef3265",111111,200,1,"23rd May, 2014",
"education","youtube license","Uday","uday.youtube.com","THIS IS A DESCRIPTION OF THE VIDEO THAT YOU ARE WATCHING.");

//returns comments list
let getComments = (videoId:string) : string[] => {
    let commentList : string[] = [];
    return commentList;
}


let commentsForVideo = getComments(mathsMensurationVideo.getVideoId());
console.log(" Comments for video are : "+commentsForVideo);

let getNextVideo = (videoId :string) : string =>{
    //-- here we check from the present video id see what next video it holds
    let nextVideo = "NEXT VIDEO"
    return nextVideo;
}
console.log("Next video is "+ getNextVideo(mathsMensurationVideo.getVideoId()));

let getNextVideoList = (videoId :string) : string[] =>{
    //-- here we check from the present video id see what next video names it holds
    let nextVideoArray : string[] = [];
    return nextVideoArray;
}
console.log(" Recommended Next Video List :  "+ getNextVideoList(mathsMensurationVideo.getVideoId()));

let videoProperties = ():string => {
    let propertyString = `
    \n Video Name : ${mathsMensurationVideo.getTitle()} 
    \n Video Id : ${mathsMensurationVideo.getVideoId()} 
    \n Video Likes : ${mathsMensurationVideo.getLikes()} 
    \n Video Dislikes :  ${mathsMensurationVideo.getDislikes()}
    \n Video Published Date : ${mathsMensurationVideo.getPublishedDate()}
    \n Video Uploader Name : ${mathsMensurationVideo.getUploaderName()}
    \n Video Uploader Link : ${mathsMensurationVideo.getUploaderLink()}
    \n Video Type : ${mathsMensurationVideo.getCategory()}
    \n Video License : ${mathsMensurationVideo.getLicense()}
    \n Video Description : ${mathsMensurationVideo.getVideoDescription()}`;
    return propertyString;
 }

 console.log(videoProperties());