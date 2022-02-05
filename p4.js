//Problem No.4:  oddFriend

function oddFriend(friendsName) {

    if (friendsName.length === 0) {
        return 'Please enter the value in your array'
    }

    let element = 0;
    let storage = 0;


    for (let i = 0; i < friendsName.length; i++) {
        element = friendsName[i].length
        storage = friendsName[i];
        if (element % 2 != 0) {
            return storage;
        } else {
            continue;
        }

    }

}

const AllFriend = oddFriend(['abir', 'sarker', 'kanak', 'rahim', 'shiplu'])

console.log(AllFriend)