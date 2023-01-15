export function add(x, y = 0) {
    return x + y;
 }

export function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
 }
 
export function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
 }
 
 
 