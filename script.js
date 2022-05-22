var s1 = ['You', 'Your family', 'Your mom', 'Your dog', 'Your life'];
var s2 = [' need to ', ' should to ', ' have to '];
var s3 = ['sleep more', 'go to eat', 'find a boyfriend', 'buy some clothes', 'workout more'];

var makeMessage = (one, two, three) => {
    return (one[Math.floor(Math.random() * (5 - 0) + 0)] + two[Math.floor(Math.random() * (3 - 0) + 0)] + three[Math.floor(Math.random() * (5 - 0) + 0)]);
}

console.log(makeMessage(s1, s2, s3));