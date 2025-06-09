var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
bigname = friends[0];
for(var i=0; i<friends.length; i++){
    element = friends[i];
    if(bigname.length<element.length){
        bigname = element;
    }
}
console.log(bigname);