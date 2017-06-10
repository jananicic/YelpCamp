var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
    var data = [
            {
                name:"Cloud's Rest",
                image:"http://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_300,g_face/Wyoming/account_photos/1020/30412-7729-29061.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
             {
                name:"Desert Rest",
                image:"http://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_300,g_face/Wyoming/account_photos/2850/00d48677eaf29301efbf597ffa132a0f_IMG_0043.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
             {
                name:"Cannon flor",
                image:"http://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_300,g_face/Wyoming/account_photos/609/26543-2297-1101.jpg",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    
function seedDB(){    
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }else {
            console.log("removed campgrounds");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }else {
                        console.log("added a campground");
                        Comment.create(
                            {
                                text:"This place is great but i wish there was internet",
                                author:"Jan"
                            },function(err, comment){
                                if(err){
                                    console.log(err);
                                }else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                            }
                        );
                    }
                });
            });
        }
    });
}
module.exports = seedDB;