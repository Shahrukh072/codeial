module.exports.profile = function(req, res){
    // res.end('<h1>users profile</h1>');
    return res.render('users_profile',{
        title: "User profile"
    });
}