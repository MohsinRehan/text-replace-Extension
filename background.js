console.log("this is background js");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
}



chrome.runtime.onMessage.addListener(getData)

function getData(mesg, sender, sendResponse) {
    console.log(mesg);
}