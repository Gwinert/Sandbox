var length
var itemsProcessed = 0;

function linkCheck() {
var body = document.querySelectorAll("*");
var checker = $(body).filter("a");
length = (Object.keys(checker).length);
var list;

console.log("LENGTH: " + length);
console.log("CHECKER: " + (Object.keys(checker).length))
checker.forEach(function ($(checker).filter("href")) {
    itemsProcessed++;
    if(itemsProcessed == length) {
    colorUp(list);
    }
    var req = new XMLHttpRequest();
    req.open('HEAD', $(checker).attr("href"), true);
    itemsProcessed++;
       try {
           req.send(null);
       }
    catch(e) {
        return true;
    }
    var data = (req.status !== 200);
    if (data) {
        console.log(checker.attr("href") + ": True")
        //list += node;
    }
    console.log($(checker).attr("href"), data);
    })
};
function colorUp(list){
    console.log("DONE");
    $(list).css({"border"  : "3px solid #ffb700", "background" : "repeating-linear-gradient(135deg, #FFE0B2, #FFE0B2 5px, #ffffff 5px, #ffffff 10px)"});
}
linkCheck();
