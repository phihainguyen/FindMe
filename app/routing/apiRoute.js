
var surveysData = require("../data/friend");

module.exports = function(app) {
    
   //============================================//
// GET Friend Data
app.get("/api/friend", function(req, res) {
    res.json(surveysData);
});

// POST newFriend Data
app.post("/api/friend", function(req, res){
    var newFriend = req.body;

    var allFriendDiffArr = [];
    // loop through all friends in friendsData
    for(var i =0; i < surveysData.length; i++){
        // total difference for each friendsData
        var totalDifference = 0;

        // loop through scores and compare newFriend to current friend (roundFriendScores)
        var roundCurrentFriendScores = surveysData[i].scores;
        for(var j = 0; j < roundCurrentFriendScores.length; j++){
            var searchFriend = parseInt(roundCurrentFriendScores[j])
            var testFriend = parseInt(newFriend.scores[j])

            var questionDiff = Math.abs(searchFriend - testFriend);
            totalDifference += questionDiff;
        }
        // added to arr for later check
        allFriendDiffArr.push(totalDifference);
    }
    // function to find the closest friends
    res.json(closestFriend(allFriendDiffArr));

    // add last to prevent matching friend with itself
    surveysData.unshift(newFriend);
});

function closestFriend(arr){
    //find smallest totalDifference
    var min = Math.min.apply(null, arr);
    //find indices of the smallest differences
    var indices = [];
    var index = arr.indexOf(min);
    while (index != -1) {
        indices.push(index);
        index = arr.indexOf(min, index + 1);
    }
    //find each of the closest friend(s)
    var closestArr = [];
    for(var i = 0; i < indices.length; i++){
        var closeIndex = indices[i];
        closestArr.push(surveysData[closeIndex]);
    }console.log(closestArr);
    return closestArr;
    
}
};
   //=============================================//

//     app.get("/api/friend", function(req, res) {
//         res.json(surveysData);
//     });

//     app.post("/api/friend", function(req, res) {
      

//         surveysData.unshift(req.body);
//         res.json(true);


//     });


   
// };


