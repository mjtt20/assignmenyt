// isBestFriend


const friends = [
    { Name: "Tom", friend: "Rock" },
    { Name: "Rock", friend: "Tom" }
]
function isBestFriend(friends) {
    var NAME = friends[0].Name;
    var NAME2 = friends[1].Name;
    var friend = friends[0].friend;
    var friend2 = friends[1].friend;
    if (NAME == friend2 && NAME2 == friend) {
        return true;
    }
    else {
        return false;
    }
}


var input = isBestFriend(friends);
var output = input;
console.log(output);



// এই ভাবে করার try করছিলাম but পারি নাই \/


/*
const friends = [
    { Name: "Tom", friend: "Rok" },
    { Name: "Rock", friend: "Tm" }
]

function isBestFriend(friends) {
    var name = friends[0];
    for (var i = 0; i < friends.length; i++){
        var friend = friends[i];
        if(name.Name = friend.friend){
            return true;
        }
        else{
            return false;
        }
    }
}

var input = isBestFriend(friends)
console.log(input);
*/


/*
const friends = [
    { Name: "Tom", friend: "Rock" },
    { Name: "Rock", friend: "om" }
]


    var NAME = friends[0];
    var NAMEc = NAME.Name;
for (var i = 0; i < friends.length; i++) {
    var friend = friends[i];
    var friendc = friend.friend;
}
if (NAMEc === friendc) {
        console.log(true);
}
else {
    console.log(false);
}
*/














